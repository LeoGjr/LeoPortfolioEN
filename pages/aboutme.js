import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>About Me</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Experience</h2>
                    <p data-aos="fade-up">Home <span>&gt;</span> About Me</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Super Geeks</h2>
                                <img src="img/teacher-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Programming Teacher.</li>
                                <li>Teaching Tools and Engines.</li>
                                <li>Mentoring and Project Development.</li>
                                <li>Integration of Game Theories and Experience Design.</li>
                                <li>Troubleshooting and Code Debugging.</li>
                            </ul>
                            <p>Developed and organized lesson plans to teach programming concepts applied to game development and game design.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Freelancer</h2>
                                <img src="img/programming-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Complete Game Development.</li>
                                <li>Adaptation to Different Platforms and Technologies.</li>
                                <li>Project Management and Communication with Clients.</li>
                                <li>Optimization and Performance.</li>
                                <li>Testing and Quality Assurance.</li>
                            </ul>
                            <p> I worked at every stage of the game development cycle.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>Monitor</h2>
                                <img src="img/cube-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Assistance in Teaching 3D Modeling.</li>
                                <li>Technical and Creative Support.</li>
                                <li>Feedback and Project Assessment.</li>
                                <li>Development of Practical Projects.</li>
                                <li>Mentoring and Individualized Monitoring.</li>
                            </ul>
                            <p> I helped students learn 3D modeling tools and techniques, such as using software such as Blender, Maya and 3ds Max for personal and professional projects.</p>
                        </div>
                        {/* <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>Content Creator</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Crispy Digital Editing</li>
                                <li>Marketing and Promotion on Social Platforms</li>
                                <li>Client communication skill</li>
                            </ul>
                            <p>Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content.</p>
                        </div> */}
                        {/* <div className="csservice" data-aos="fade-left">
                            <span>05</span>
                            <div>
                                <h2>UI/UX Product Design</h2>
                                <img src="https://www.svgrepo.com/show/475614/ui-china.svg" alt="" />
                            </div>
                            <ul>
                                <li>Reusable Components</li>
                                <li>Responsiveness</li>
                                <li>Quality assurance and testing.</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <p>I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.</p>
                        </div> */}
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

            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Education</h2>
                    {/* <p data-aos="fade-up">Home <span>&gt;</span> Sobre Mim</p> */}
                </div>
            </div>

            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Microcamp</h2>
                                <img src="/img/website_icon.svg" alt="" />
                            </div>
                            <ul>
                                <li>I learned the basic concepts of game design and development.</li>
                                <li>I gained practical knowledge about the use of engines, such as Unity and Unreal Engine.</li>
                                <li>Programming and Scripting Logic.</li>
                                <li>Creation of 2D and 3D Games.</li>
                                <li>Teamwork and Project Management.</li>
                            </ul>
                            <p>I developed skills in programming languages, such as C# and Blueprint.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>04</span>
                            <div>
                                <h2>Belas Artes - SP</h2>
                                <img src="img/letter-uppercase-square-b-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Design of Scenarios and Immersive Environments.</li>
                                <li>Use of Professional Software.</li>
                                <li>Art Direction for 3D Projects.</li>
                                <li>Animation of Characters and Objects.</li>
                                <li>Professional Portfolio Development.</li>
                            </ul>
                            <p>I acquired skills in planning and executing projects with a focus on aesthetic and narrative cohesion.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>02</span>
                            <div>
                                <h2>Mentorama</h2>
                                <img src="img/magister-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Complete Mastery of the Unity Engine.</li>
                                <li>Programming in C#.</li>
                                <li>Development of 2D and 3D Games.</li>
                                <li>Project Management and Optimization.</li>
                                <li>Multiplatform Development.</li>
                            </ul>
                            <p>Completed practical projects that demonstrate skills in game development, composing a professional portfolio for presentation to the market.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>05</span>
                            <div>
                                <h2>Courses</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Exploration of Multiple Development Engines.</li>
                                <li>Learning at Your Own Pace.</li>
                                <li>Specialization in Modern Techniques.</li>
                                <li>Soft Skills Development.</li>
                                <li>Constant Update with the Market.</li>
                            </ul>
                            <p>I improved self-management skills essential for self-taught learning and the practical application of acquired concepts.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>03</span>
                            <div>
                                <h2>PUC-Campinas</h2>
                                <img src="img/university-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Game Design Fundamentals.</li>
                                <li>Character and Scenario Design.</li>
                                <li>Level Design.</li>
                                <li>Game Project Management.</li>
                                <li>Portfolio and Professional Preparation.</li>
                            </ul>
                            <p>I experimented with tools and practices to manage multidisciplinary teams and production processes, aligning creative and technical objectives.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>Linkedin Learning</h2>
                                <img src="img/linkedin-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Deep dive into Game Engines.</li>
                                <li>User-Focused Design.</li>
                                <li>I work with Graphics and Audio.</li>
                                <li>Creative Project Management.</li>
                                <li>Professional Certification.</li>
                            </ul>
                            <p>Training in organizing and planning game projects, through to distribution, using agile methodologies, ollaborative tools and online platforms.</p>
                        </div>
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