import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Habilities</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Habilities</h2>
                    <p data-aos="fade-up">Home <span>&gt;</span> Habilities</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Web Development</h2>
                                <img src="/img/website_icon.svg" alt="" />
                            </div>
                            <ul>
                                <li>Performance and Loading Time.</li>
                                <li>Reusable Components.</li>
                                <li>Responsiveness.</li>
                                <li>Quality Assurance and Testing.</li>
                                <li>Continuous Maintenance, Updates and Bug Fixes.</li>
                            </ul>
                            <p>I have great expertise in web development, achieving remarkable results and meeting the specific needs of your project.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Mobile Development</h2>
                                <img src="https://www.svgrepo.com/show/475631/android-color.svg" alt="" />
                            </div>
                            <ul>
                                <li>Prototyping and Creation of Wireframes.</li>
                                <li>UI/UX design.</li>
                                <li>Coding and Programming.</li>
                                <li>Quality Assurance (QA) Testing.</li>
                                <li>Application Deployment.</li>
                            </ul>
                            <p>Proficient in creating high-performance, user-focused mobile games. Expertise in development for iOS, Android and multi-platforms.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>05</span>
                            <div>
                                <h2>Game Development</h2>
                                <img src="img/programming-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Development of Game Mechanics.</li>
                                <li>Level Design and Balancing.</li>
                                <li>Optimization and Performance.</li>
                                <li>Development for Multiple Platforms.</li>
                                <li>Creation of Intuitive Interfaces (UI/UX).</li>
                            </ul>
                            <p>Solid experience with the most diverse Engines, gameplay programming, character animation and integration of complex systems.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>Game Designer</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Game Balancing and Progression.</li>
                                <li>Level and Environment Design.</li>
                                <li>Rewards Systems and Economy.</li>
                                <li>AI systems and NPCs.</li>
                                <li>Interface and UX Design.</li>
                            </ul>
                            <p>Ability to develop engaging game mechanics, from initial design to implementation, ensuring a fluid and fun experience for players and improving the user experience.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>04</span>
                            <div>
                                <h2>UI/UX Design</h2>
                                <img src="https://www.svgrepo.com/show/475614/ui-china.svg" alt="" />
                            </div>
                            <ul>
                                <li>Design of Intuitive and Functional Interfaces.</li>
                                <li>Responsive Design.</li>
                                <li>Visual and Aesthetic Design.</li>
                                <li>Visual and Sound Feedback.</li>
                                <li>Focus on Accessibility.</li>
                            </ul>
                            <p>Ability to create user interfaces that are easy to understand and use, with a focus on improving the gaming experience.</p>
                        </div>
                        {/* <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>E-commerce Business Solutions</h2>
                                <img src="https://www.svgrepo.com/show/475678/shopify-color.svg" alt="" />
                            </div>
                            <ul>
                                <li>Ecommerce store</li>
                                <li>Online Purchase</li>
                                <li>Quality assurance and testing.</li>
                                <li>Marketing and Promotion on Social Platforms</li>
                            </ul>
                            <p>My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.</p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="pricingplansec">
                <div className="container">
                    <div className="pricingtitles text-center">
                        <h3><img src="/img/chevron_right.png" alt="" /> PRICING PLAN</h3>
                        <h2>Pricing My Work</h2>
                    </div>

                    <div className="pricingcards">
                        <div className="pricingcard">
                            <h4>Life Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$29.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Lite includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><HiXMark /> Multi-language support</li>
                                    <li><HiXMark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" data-aos="fade-up">
                            <h4>Premium Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$39.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in lite, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><HiXMark /> Multi-language support</li>
                                    <li><HiXMark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" >
                            <h4>Pro Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$49.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in pro, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><IoMdCheckmark /> Multi-language support</li>
                                    <li><IoMdCheckmark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    </>
}