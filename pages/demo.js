// pages/blogs/[slug].js

import { SlCalender } from "react-icons/sl";
import { CiRead } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsCopy } from "react-icons/bs";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import Blogsearch from "@/components/Blogsearch";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Spinner from "@/components/Spinner";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import axios from "axios";

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query; // Fetch the slug parameter from the router

    // search bar open close
    // hook for all data fetching
    const { allwork } = useFetchData('/api/blogs');

    const [searchInput, setSearchInput] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSearchOpen = () => {
        setSearchInput(!searchInput);
    }

    const handleSearchClose = () => {
        setSearchInput(false);
    }

    const [blogData, setBlogData] = useState({ blog: {}, comments: [] }); // Initialize comments as an empty array
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        title: '',
        contentpera: '',
        parent: null, // Track parent comment ID for replies
        parentName: '' // Track parent comment name
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [messageOk, setMessageOk] = useState('');

    useEffect(() => {
        const fetchBlogData = async () => {
            if (slug) {
                try {
                    const response = await axios.get(`/api/blogs/${slug}`);
                    setBlogData(response.data);
                    setLoading(false);
                } catch (error) {
                    setError('Failed to fetch blog data. Please try again later.');
                    setLoading(false);
                }
            }
        };

        fetchBlogData();
    }, [slug]); // Fetch data whenever slug changes

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/blogs/${slug}`, newComment);

            // Check if it's a reply (nested comment) or root comment
            if (newComment.parent) {
                // Add the new comment to its parent's children array
                setBlogData(prevData => {
                    const updatedComments = prevData.comments.map(comment => {
                        if (comment._id === newComment.parent) {
                            return {
                                ...comment,
                                children: [...comment.children, response.data]
                            };
                        } else if (comment.children && comment.children.length > 0) {
                            // Recursively update children comments
                            return {
                                ...comment,
                                children: updateChildrenComments(comment.children, newComment.parent, response.data)
                            };
                        }
                        return comment;
                    });
                    return {
                        ...prevData,
                        comments: updatedComments
                    };
                });
            } else {
                // Add new root comment
                setBlogData(prevData => ({
                    ...prevData,
                    comments: [response.data, ...prevData.comments]
                }));
            }

            setMessageOk('✅️ Comment posted successfully');
            // Clear form after successful submission
            setNewComment({
                name: '',
                email: '',
                title: '',
                contentpera: '',
                parent: null,
                parentName: '' // Reset parent name after submission
            });
        } catch (error) {
            console.error('Error submitting comment:', error);
            setMessageOk('❌ Failed to post comment');
        }
    };



    const handleReply = (parentCommentId, parentName) => {
        setNewComment({
            ...newComment,
            parent: parentCommentId,
            parentName: parentName // Set parent name for the reply
        });
    };


    const updateChildrenComments = (comments, parentId, newComment) => {
        return comments.map(comment => {
            if (comment._id === parentId) {
                // Add new reply to children array
                return {
                    ...comment,
                    children: [...comment.children, newComment]
                };
            } else if (comment.children && comment.children.length > 0) {
                // Recursively update children comments
                return {
                    ...comment,
                    children: updateChildrenComments(comment.children, parentId, newComment)
                };
            }
            return comment;
        });
    };
    // const renderComments = (comments) => {
    //     return 
    // };


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const createdAtDate = blogData && blogData.blog.createdAt ? new Date(blogData && blogData.blog.createdAt) : null;

    // Function to format the date as "20 May 2024 14:11 pm"
    const formatDate = (date) => {
        // Check if date is valid
        if (!date || isNaN(date)) {
            return ''; // or handle the error as needed
        }

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour12: true // Use 12-hour format
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    // Usage example:
    const formattedDate = formatDate(createdAtDate);
    console.log(formattedDate); // Outputs something like "20 May 2024 14:11 pm" if createdAtDate is valid



    const Code = ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');

        const [copied, setCopied] = useState(false);

        const handleCopy = () => {
            navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000); // 3000 milliseconds = 3 seconds
        };

        if (inline) {
            return <code>{children}</code>;
        } else if (match) {
            return (

                <div style={{ position: 'relative' }}>
                    <SyntaxHighlighter
                        style={a11yDark}
                        language={match[1]}
                        PreTag="pre"
                        {...props}
                        codeTagProps={{ style: { padding: '0', borderRadius: '5px', overflowX: 'auto', whiteSpace: 'pre-wrap' } }}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                    <button style={{ position: 'absolute', top: '0', right: '0', zIndex: '1', background: '#3d3d3d', color: '#fff', padding: '10px' }} onClick={handleCopy}>
                        {copied ? 'Copied!' : 'Copy code'}
                    </button>
                </div>
            );
        } else {
            return (
                <code className="md-post-code" {...props}>
                    {children}
                </code>
            );
        }
    };

    const renderComments = (comments) => {
        if (!comments) {
            return null; // Handle case when comments are not yet loaded
        }

        return comments.map((comment) => (
            <div className="blogcomment" key={comment._id}>
                <h3>{comment.name} <span>{new Date(comment.createdAt).toLocaleString()}</span></h3>
                <h4>Topic: <span>{comment.title}</span></h4>
                <p>{comment.contentpera}</p>
                <button onClick={() => handleReply(comment._id, comment.name)}>Reply</button>
                {comment.parent && (
                    <span>Replied to {comment.parentName}</span>
                )}
                {comment.children && comment.children.length > 0 && (
                    <div className="children-comments">
                        {comment.children.map((child) => (
                            <div className="child-comment" key={child._id}>
                                <h3>{child.name} <span>{new Date(child.createdAt).toLocaleString()}</span></h3>
                                <span>Replied to {child.parentName}</span>
                                <h4>Topic: <span>{child.title}</span></h4>
                                <p>{child.contentpera}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ));
    };


    // Replace 'example.com' with your actual domain
    const blogUrl = `https://localhost:3000/blogs/${slug}`;


    const handleCopyUrl = (url) => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    };

    return (
        <div>
            {blogData && (
                <div className="blogslugpage">
                    <div className="container">
                        <div className="blogslugpagecont">
                            <div className="leftsitedetails">
                                <div className="leftbloginfoimg">
                                    <img src={blogData.blog.images[0] || '/img/noimage.png'} alt={blogData && blogData.title} />
                                </div>
                                <div className="slugbloginfopub">
                                    <div className="flex gap-2">
                                        <div className="adminslug">
                                            <img src="/img/coder.jpg" alt="" />
                                            <span>By Admin</span>
                                        </div>
                                        <div className="adminslug">
                                            <SlCalender />
                                            <span>{formatDate(createdAtDate)}</span>
                                        </div>
                                        <div className="adminslug">
                                            <CiRead />
                                            <span>Comments ({blogData.comments ? blogData.comments.length : 0})</span>
                                        </div>
                                    </div>

                                    <div className="shareblogslug">
                                        {/* Copy URL button */}
                                        <div title="Copy URL" onClick={() => handleCopyUrl(blogUrl)} style={{ cursor: 'pointer' }}>
                                            <BsCopy /> <span>{copied ? 'Copied!' : ''}</span>
                                        </div>

                                        {/* Facebook share button */}
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
                                            <RiFacebookFill />
                                        </a>

                                        {/* Twitter share button */}
                                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out this blog post: ' + blogUrl)}`} target="_blank" rel="noopener noreferrer">
                                            <FaTwitter />
                                        </a>

                                        {/* WhatsApp share button */}
                                        <a href={`whatsapp://send?text=Check out this blog post: ${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
                                            <RiWhatsappFill />
                                        </a>

                                        {/* LinkedIn share button */}
                                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div>
                                </div>
                                <h1>{blogData.blog.title}</h1>
                                {loading ? <Spinner /> : <div className="blogcontent">

                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            code: Code,
                                        }}
                                    >
                                        {blogData.blog.description}
                                    </ReactMarkdown>
                                </div>}

                                <div className="blogslugtags">
                                    <div className="blogstegs">
                                        <h2>Tags:</h2>
                                        <div className="flex flex-wrap gap-1">
                                            {blogData && blogData.blog.tags.map((cat) => {
                                                return <span key={cat} >{cat}</span>
                                            })}
                                            {/*                                     
                                        <Link href='/'>Css</Link>
                                        <Link href='/'>Digital Marketing</Link>
                                        <Link href='/'>Fullter Dev</Link>
                                        <Link href='/'>React</Link>
                                        <Link href='/'>Node js</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="blogusecomments">
                                    <h2>Comments</h2>
                                    {renderComments(blogData.comments)}
                                </div>
                                <div className="blogslugcomments">
                                    {newComment.parentName && (
                                        <h2>Leave a reply to {newComment.parentName}</h2>
                                    )}
                                    {!newComment.parentName && (
                                        <h2>Leave a Reply</h2>
                                    )}
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={handleCommentSubmit} className="leaveareplyform">
                                        <div className="nameemailcomment">
                                            <input type="text"
                                                placeholder="Enter Name"
                                                value={newComment.name}
                                                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                                                required />
                                            <input type="email"
                                                placeholder="Enter Email"
                                                value={newComment.email}
                                                onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                                            />
                                        </div>
                                        <input type="text"
                                            placeholder="Enter Title"
                                            value={newComment.title}
                                            onChange={(e) => setNewComment({ ...newComment, title: e.target.value })}
                                        />
                                        <textarea name="textcomments"
                                            placeholder="Enter Your Comments"
                                            rows={4}
                                            id="textcomments"
                                            value={newComment.contentpera}
                                            onChange={(e) => setNewComment({ ...newComment, contentpera: e.target.value })}
                                        ></textarea>
                                        <div className="flex gap-2">
                                            <button type="submit">Post Comment</button>
                                            <p>{messageOk}</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="rightsitedetails">
                                <div className="rightslugsearchbar">
                                    <input onClick={handleSearchOpen} type="text" placeholder="Search..." />
                                    <button><FiSearch /></button>
                                </div>
                                <div className="rightslugcategory">
                                    <h2>CATEGORIES</h2>
                                    <ul>
                                        <Link href='/blogs/category/Next Js'><li>Next Js <span>({allwork.filter(ab => ab.blogcategory[0] === "Next Js").length})</span></li></Link>
                                        <Link href='/blogs/category/Digital Marketing'><li>Digital Marketing <span>({allwork.filter(ab => ab.blogcategory[0] === "Digital Marketing").length})</span></li></Link>
                                        <Link href='/blogs/category/React js'><li>React<span>({allwork.filter(ab => ab.blogcategory[0] === "React js").length})</span></li></Link>
                                        <Link href='/blogs/category/Node js'><li>Node js <span>({allwork.filter(ab => ab.blogcategory[0] === "Node js").length})</span></li></Link>
                                        <Link href='/blogs/category/React js'><li>React js <span>({allwork.filter(ab => ab.blogcategory[0] === "React js").length})</span></li></Link>
                                        <Link href='/blogs/category/Flutter Dev'><li>Fullter Dev <span>({allwork.filter(ab => ab.blogcategory[0] === "Flutter Dev").length})</span></li></Link>
                                    </ul>
                                </div>
                                <div className="rightrecentpost">
                                    <h2>RECENT POST</h2>
                                    {allwork.slice(0, 3).map((blog) => {
                                        return <Link key={blog._id} href={`/blogs/${blog.slug}`} className="rightrecentp">
                                            <img src={blog.images[0]} alt={blog.title} />
                                            <h3>{blog.title}</h3>
                                        </Link>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {searchInput ? <Blogsearch cls={handleSearchClose} /> : null}

                </div>

            )}
        </div>
    );
};

export default BlogPage;
