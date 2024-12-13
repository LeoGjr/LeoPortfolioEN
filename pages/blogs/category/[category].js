import { FreeMode } from 'swiper/modules';
import Head from 'next/head';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { useRouter } from 'next/router';
import useFetchData from '@/hooks/useFetchData';
import Spinner from '@/components/Spinner';
import Link from 'next/link';


export default function Category() {

    const router = useRouter();
    const { category } = router.query

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');
    // fetch blog category data
    const { alldata, loading } = useFetchData(`/api/blogs?blogcategory=${category}`)

    const filteredBlogs = alldata.filter((item) => item.category === item.category)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 20);

    const blogcategoryData = [...filteredBlogs].reverse()

    // Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const allblog = alldata.length; // Total number of blogs
    // Filter all data based on search query
   
    // Calculate index of the first blog displayed on the current page
    const indexOfFirstblog = (currentPage - 1) * perPage;
    const indexOfLastblog = currentPage * perPage;

    // Get the current page's blogs
    const currentBlogs = blogcategoryData.slice(indexOfFirstblog, indexOfLastblog);

    // publish blogs
    const publishedData = currentBlogs.filter(ab => ab.status === "publish");

    

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
        pageNumbers.push(i);
    }

    // for title 
    const capitalizeTitle = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const pageTitle = `${category} - Millano | Blogs`;
    const capitalizedTitle = capitalizeTitle(pageTitle);

    return <>
        <Head>
            <title>{capitalizedTitle}</title>
        </Head>
        <div className="blogcategory">
            <section className="tophero">
                <div className="container">
                    <div className="toptitle">
                        <div className="toptitlecont flex">
                            <h1 data-aos="fade-right">Category <span>{category}</span></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latestpostssec">
                <div className="container">
                    <div className="border"></div>
                    <div className="latestpostsdata">
                        <div className="fetitle">
                            <h3>Next Js Articles :</h3>
                        </div>
                        <div className="latestposts">
                            {loading ? <Spinner /> : <>
                                {publishedData.length === 0 ? <h1 className='w-100 flex flex-center'>No Data Found</h1> : <>
                                    {publishedData.map((blog) => {
                                        return <div className="lpost" data-aos="flip-right" key={blog._id}>
                                            <div className="lpostimg">
                                                <Link href={`/blogs/${blog.slug}`}><img src={blog.images[0]} alt={blog.title} /></Link>
                                                <div className="tegs">
                                                    {blog.blogcategory.map((cat) => {
                                                        return <Link href={`/blogs/category/${cat}`} className="ai"><span></span>{cat}</Link>
                                                    })}
                                                </div>
                                            </div>
                                            <div className="lpostinfo">
                                                <h3><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                                                </h3>
                                                <p>Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Haec
                                                    et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam,
                                                    confuse loquitur.

                                                    Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                                                    perspicuum est omnis rectas res atque laudabilis eo referri, ut</p>
                                                <h4 className="flex"><img src="/img/coder.jpg" alt="" /><span>by vbm coder</span></h4>
                                            </div>
                                        </div>
                                    })}
                                </>}

                            </>}
                        </div>
                    </div>
                    {publishedData.length === 0 ? (
                        ""
                    ) : (
                        <div className='blogspaginationbtn flex flex-center mt-3'>
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, pageNumbers.length)).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`${currentPage === number ? 'active' : ''}`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentBlogs.length < perPage}>Next</button>
                        </div>
                    )}
                </div>
            </section>


        </div>
    </>
}