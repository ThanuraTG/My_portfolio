import { useState } from 'react'
import Footer from '../Component/Footer'
import Navi_bar from '../Component/Navi_bar'
import '../Css/about.css'
import first_profile from '../Images/first_profile.png'
import importance from '../Images/importance.png'
import profile from '../Images/profile.png'
import python from '../Images/python.png'
import react from '../Images/react.png'
import github from '../Images/github.png'
import java from '../Images/java.png'
import html from '../Images/html.png'
import flutter from '../Images/flutter.png'
import php from '../Images/php.png'
import springboot from '../Images/springboot.png'
import dart from '../Images/dart.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import laravel from '../Images/laravel.png'
import mysql from '../Images/mysql.png'
import mongodb from '../Images/mongodb.png'
import node from '../Images/node.png'
import c from '../Images/c.png'


export default function About() {

    const [active, setActive] = useState("part_1");

    return (
        <div>
            <Navi_bar />
            <div className="full_parts">
                <section className='intros_part'>
                    <div className="full_part">
                        <div className="img_part">
                            <img src={first_profile} alt="" srcset="" />
                        </div>
                        <div className="name_part">
                            <h1>Thanura <br />Thilak</h1>
                            <h3>Delivering Premium Web Design and Development Services to Boost Your Online Presence.</h3>
                            <div className="buttons">
                                <button><img src={importance} alt="" srcset="" /></button>
                                <h4>ABOUT ME</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='detail'>
                    <div className="menu_part">
                        <button type="button" onClick={() => setActive("part_1")}>Resume</button>
                        <button type="button" onClick={() => setActive("part_2")}>Education</button>
                        <button type="button" onClick={() => setActive("part_3")}>Skills</button>
                    </div>
                    <div className="detail_part">
                        {active === "part_1" && (
                        <section className='part_1'>
                            <h3>THANURA THILAK</h3>
                            <h1>Your Partner in Bringing Your Web Design Vision to Life</h1>
                            <p>ccsccascasscascacac</p>
                            <p>ccacacasccdfvfvb</p>
                            <div className="mephoto">
                                <img src={profile} alt="" />
                            </div>
                        </section>
                        )}
                        {active === "part_2" && (
                        <section className='part_2'>
                            <h1>Education</h1>
                            <p>hvfcvhbjbhvcdsaw seerdtfgyhujnnhgvy</p>
                            <div className="edu">
                                <h3>KIU University</h3>
                                <h4>2022 - PRESENT</h4>
                            </div>
                            <div className="edu">
                                <h3>KIU University</h3>
                                <h4>2022 - PRESENT</h4>
                            </div>
                            <div className="edu">
                                <h3>KIU University</h3>
                                <h4>2022 - PRESENT</h4>
                            </div>
                        </section>
                        )}
                        {active === "part_3" && (
                        <section className='part_3'>
                            <h1 className='ski_h'>Skills</h1>
                            <div className="skl">
                                <div className="lang">
                                    <img src={react} alt="" srcset="" />
                                    <h3>Reacte</h3>
                                </div>
                                <div className="lang">
                                    <img src={springboot} alt="" srcset="" />
                                    <h3>Spring Boot</h3>
                                </div>
                                <div className="lang">
                                    <img src={flutter} alt="" srcset="" />
                                    <h3>Flutter</h3>
                                </div>
                            </div>
                            <div className="skl">
                                <div className="lang">
                                    <img src={laravel} alt="" srcset="" />
                                    <h3>Laravel</h3>
                                </div>
                                <div className="lang">
                                    <img src={js} alt="" srcset="" />
                                    <h3>Java Script</h3>
                                </div>
                                <div className="lang">
                                    <img src={dart} alt="" srcset="" />
                                    <h3>Dart</h3>
                                </div>
                            </div>
                            <div className="skl">
                                <div className="lang">
                                    <img src={java} alt="" srcset="" />
                                    <h3>Java</h3>
                                </div>
                                <div className="lang">
                                    <img src={html} alt="" srcset="" />
                                    <h3>HTML</h3>
                                </div>
                                <div className="lang">
                                    <img src={css} alt="" srcset="" />
                                    <h3>CSS</h3>
                                </div>
                            </div>
                            <div className="skl">
                                <div className="lang">
                                    <img src={python} alt="" srcset="" />
                                    <h3>Python</h3>
                                </div>
                                <div className="lang">
                                    <img src={php} alt="" srcset="" />
                                    <h3>PHP</h3>
                                </div>
                                <div className="lang">
                                    <img src={mongodb} alt="" srcset="" />
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                            <div className="skl">
                                <div className="lang">
                                    <img src={mysql} alt="" srcset="" />
                                    <h3>My SQL</h3>
                                </div>
                                <div className="lang">
                                    <img src={node} alt="" srcset="" />
                                    <h3>Node.JS</h3>
                                </div>
                                <div className="lang">
                                    <img src={c} alt="" srcset="" />
                                    <h3>C#</h3>
                                </div>
                            </div>
                        </section>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
