import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";

export default function Header() {

    // darkMode on off
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage for dark mode preference on initial load
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        // Apply dark mode styles when darkMode state changes
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', true);
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', false);
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Toggle dark mode status
    };


    // header sticky
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // navlist active 
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    };

    useEffect(() => {
        // Update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);


    // mobile navbar 
    const [mobile, setMobile] = useState(false);

    const handleMobileOpen = () => {
        setMobile(!mobile);
    }
    const handleMobileClose = () => {
        setMobile(false);
    }

    return <>
        <header>
            <nav className="container flex flex-sb">
                <div className="logo flex gap-2">
                    <Link href='/'><img src={`/img/${darkMode ? "white" : "logo"}.png`} alt="" /></Link>
                </div>
                <div className="navlist flex gap-2">
                    <ul className="flex gap-2">
                        <li><Link href="/"
                            className={activeLink === '/' ? 'active' : ''}
                            onClick={() => handleLinkClick('/')}>Home</Link></li>
                        <li><Link href="/aboutme"
                            className={activeLink === '/aboutme' ? 'active' : ''}
                            onClick={() => handleLinkClick('/aboutme')}>About Me</Link></li>
                        <li><Link href="/services"
                            className={activeLink === '/services' ? 'active' : ''}
                            onClick={() => handleLinkClick('/services')}>Habilities</Link></li>
                        <li><Link href="/projects"
                            className={activeLink === '/projects' ? 'active' : ''}
                            onClick={() => handleLinkClick('/projects')}>Projects</Link></li>
                        {/* <li><Link href="/blogs"
                            className={activeLink === '/blogs' ? 'active' : ''}
                            onClick={() => handleLinkClick('/blogs')}>Blogs</Link></li> */}
                        {/* <li><Link href="/gallery"
                            className={activeLink === '/gallery' ? 'active' : ''}
                            onClick={() => handleLinkClick('/gallery')}>Gallery</Link></li> */}
                        {/* <li><Link href="/shop"
                            className={activeLink === '/shop' ? 'active' : ''}
                            onClick={() => handleLinkClick('/shop')}>Shop</Link></li> */}
                        <li><Link href="/contact"
                            className={activeLink === '/contact' ? 'active' : ''}
                            onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
                    </ul>
                    <div className="darkmodetoggle" onClick={toggleDarkMode}>
                        {darkMode ? <IoMoonSharp /> : <LuSun />}
                    </div>
                    <button><Link href='/contact'>Contact Me!</Link></button>
                    <div className="mobiletogglesvg" onClick={handleMobileOpen}>
                        <HiMiniBars3BottomRight />
                    </div>
                </div>
                <div className={mobile ? 'mobilenavlist active' : 'mobilenavlist'}>
                    <span onClick={handleMobileClose} className={mobile ? 'active' : ''}></span>
                    <div className="mobilelogo">
                        <img src="/img/white.png" alt="logo" />
                        <h2>Leonardo</h2>
                    </div>
                    <ul className="flex gap-1 flex-col flex-left mt-3" onClick={handleMobileClose}>
                        <li><Link href="/"
                            className={activeLink === '/' ? 'active' : ''}
                            onClick={() => handleLinkClick('/')}>Home</Link></li>
                        <li><Link href="/aboutme"
                            className={activeLink === '/aboutme' ? 'active' : ''}
                            onClick={() => handleLinkClick('/aboutme')}>About Me</Link></li>
                        <li><Link href="/services"
                            className={activeLink === '/services' ? 'active' : ''}
                            onClick={() => handleLinkClick('/services')}>Habilities</Link></li>
                        <li><Link href="/projects"
                            className={activeLink === '/projects' ? 'active' : ''}
                            onClick={() => handleLinkClick('/projects')}>Projects</Link></li>
                        {/* <li><Link href="/blogs"
                            className={activeLink === '/blogs' ? 'active' : ''}
                            onClick={() => handleLinkClick('/blogs')}>Blogs</Link></li> */}
                        {/* <li><Link href="/gallery"
                            className={activeLink === '/gallery' ? 'active' : ''}
                            onClick={() => handleLinkClick('/gallery')}>Gallery</Link></li> */}
                        {/* <li><Link href="/shop"
                            className={activeLink === '/shop' ? 'active' : ''}
                            onClick={() => handleLinkClick('/shop')}>Shop</Link></li> */}
                        <li><Link href="/contact"
                            className={activeLink === '/contact' ? 'active' : ''}
                            onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
                    </ul>
                    <p>Copyright &copy; 2024 | Leonardo</p>
                </div>
            </nav>
        </header>

    </>
}