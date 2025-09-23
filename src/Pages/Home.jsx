import Footer from '../Component/Footer'
import Navi_bar from '../Component/Navi_bar'
import { Link } from 'react-router-dom'
import '../Css/home.css'
import first_profile_1 from '../Images/first_profile_1.png'
import profile from '../Images/profile.png'
import linkin from '../Images/linkin.png'
import github from '../Images/github.png'
import python from '../Images/python.png'
import react from '../Images/react.png'
import java from '../Images/java.png'
import html from '../Images/html.png'
import flutter from '../Images/flutter.png'
import php from '../Images/php.png'
import x from '../Images/x.png'
import springboot from '../Images/springboot.png'

export default function Home() {
    return (
        <div>
        {/* navigation bar part */}
            <Navi_bar />
        {/* home section part */}
            {/* info code part */}
            <section class="info">
                <div className="profile">
                    <img src={first_profile_1} alt="" />
                    <h1>Web & Mobile <br /> Developer</h1>
                    <p>Premium web design, development, and SEO Services <br /> to help your business stand out.</p>
                </div>
            </section>
            {/* logo line code part */}
            <section class='logo_line'>
                <div class="logo-ticker">
                    <ul>
                        <li class="minus">
                            <img src={github} alt="" />
                        </li>
                        <li class="plus">
                            <img src={java} alt="" />
                        </li>
                        <li class="plus">
                            <img src={html} alt="" />
                        </li>
                        <li class="minus">
                            <img src={flutter} alt="" />
                        </li>
                        <li class="plus">
                            <img src={python} alt="" />
                        </li>
                        <li class="minus">
                            <img src={react} alt="" />
                        </li>
                        <li class="plus">
                            <img src={php} alt="" />
                        </li>
                    </ul>

                    <ul aria-hidden="true">
                        <li class="minus">
                            <img src={github} alt="" />
                        </li>
                        <li class="plus">
                            <img src={java} alt="" />
                        </li>
                        <li class="plus">
                            <img src={html} alt="" />
                        </li>
                        <li class="minus">
                            <img src={flutter} alt="" />
                        </li>
                        <li class="plus">
                            <img src={python} alt="" />
                        </li>
                        <li class="minus">
                            <img src={react} alt="" />
                        </li>
                        <li class="plus">
                            <img src={php} alt="" />
                        </li>
                    </ul>
                </div>
            </section>
            {/* about code part */}
            <section class="about">
                <div className="det">
                    <div className="soft_and_see-button">
                        <h3>Software Developer</h3>
                        <a href="/about">
                            <button type="button">SEE ALL</button>
                        </a>
                    </div>
                    <div className="name_part">
                        <h2>Hello I'm </h2>
                        <h1>Thanura Thilak</h1>
                        <p>  As a web designer and developer, I am a highly motivated and resourceful individual with a relentless determination to deliver innovative solutions, bringing a unique combination of creativity and technical expertise to each project.</p>
                    </div>
                    <div className="cv_and_link">
                        <button type="button">Download CV</button>
                        <div className="logo_link">
                            <a href="https://github.com/ThanuraTG"><img src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/thanura-thilak-7b41202bb/"><img src={linkin} alt="" /></a>
                            <a href="https://x.com/ThanuraTG"><img src={x} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="photo">
                    <img src={profile} alt="" srcset="" />
                </div>
            </section>
            {/* skill code part */}
            <section class='skill'>
                <h1>My Skills</h1>
                <Link to="/about">
                    <button type="button">SEE ALL</button>
                </Link>
                <div className="lange_card">
                    <div className="dev">
                        <div className="react">
                            <div className="images">
                                <img src={react} alt="" srcset="" />
                            </div>
                            <h>React</h>
                        </div>
                        <div className="react">
                            <div className="images">
                                <img src={flutter} alt="" srcset="" />
                            </div>
                            <h>Flutter</h>
                        </div>
                        <div className="react">
                            <div className="images">
                                <img src={springboot} alt="" srcset="" />
                            </div>
                            <h>Spring Boot</h>
                        </div>
                    </div>
                    <div className="dev">
                        <div className="react">
                            <div className="images">
                                <img src={python} alt="" srcset="" />
                            </div>
                            <h>Python</h>
                        </div>
                        <div className="react">
                            <div className="images">
                                <img src={java} alt="" srcset="" />
                            </div>
                            <h>Java</h>
                        </div>
                        <div className="react">
                            <div className="images">
                                <img src={php} alt="" srcset="" />
                            </div>
                            <h>PHP</h>
                        </div>
                    </div>
                </div>
            </section>
            {/* project code part */}
            <section class='project'>
                <h1>My Project</h1>
                <a href="/work_page">
                    <button type="button">SEE ALL</button>
                </a>
                <div className="project_card">
                    <div className="dev">
                        <a href="/work_page">
                            <div className="pro_1">
                                <h>1. Fixme Academy Website</h>
                                <a href="http://"><img src={github} alt="" srcset="" /></a>
                            </div>
                        </a>
                        <a href="/work_page">
                            <div className="pro_1">
                                <h>2. Med Drive Mobil App</h>
                                <a href="http://"><img src={github} alt="" srcset="" /></a>
                            </div>
                        </a>
                        <a href="/work_page">
                            <div className="pro_1">
                                <h>3. Carecloud Medicine System</h>
                                <a href="http://"><img src={github} alt="" srcset="" /></a>
                            </div>
                        </a>
                        <a href="/work_page">
                            <div className="pro_1">
                                <h>4. Vehicle Rental System</h>
                                <a href="http://"><img src={github} alt="" srcset="" /></a>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        {/* footer part */}
            <Footer />
        </div>
    )
}
