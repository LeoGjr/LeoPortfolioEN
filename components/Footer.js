import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footersec flex flex-center flex-col gap-2">
                <div className="logo">
                    <img src="/img/logo.png" alt="" />
                </div>
                <ul className="flex gap-2">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/aboutme'>About Me</Link></li>
                    <li><Link href='/services'>Habilities</Link></li>
                    <li><Link href='/projects'>Projects</Link></li>
                    {/* <li><Link href='/blogs'>Blogs</Link></li> */}
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <ul className="hero_social">
                    <li><a target="_blank" href="https://linktr.ee/LeoGjr"><LiaBasketballBallSolid /></a></li>
                    <li><a target="_blank" href="https://www.behance.net/leonardogodoy10"><FaBehanceSquare /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/leonardo-de-godoy-junior/"><GrLinkedinOption /></a></li>
                    <li><a target="_blank" href="https://github.com/LeoGjr"><FaGithub /></a></li>
                </ul>
                <div className="copyrights">&copy; 2024 All Rights Reserved By <span>Leonardo</span></div>
            </div>
        </footer>
    </>
}