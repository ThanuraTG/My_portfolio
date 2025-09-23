import React from 'react'
import Navi_bar from '../Component/Navi_bar'
import Footer from '../Component/Footer'
import '../Css/service.css'

export default function Service() {
    return (
        <div>
        {/* this is navegate bar part */}
            <Navi_bar />
        {/* this is body part on service page */}
            <div className="services_part">
                <div className="service_name">
                    <h1>Service</h1>
                    <p>Premium web design, development, and SEO Services to help your business stand out.</p>
                </div>
                <section className='service_part'>
                    <div className="service_div">
                        <h1>01.</h1>
                        <h1>Full Stack Web Development</h1>
                        <p>Full Stack Development involves creating both frontend and backend of web applications, including UI, server-side logic, and database integration.</p>
                        <a href="/contact"><button type="button">CONTACT</button></a>
                    </div>
                    <div className="service_div">
                        <h1>02.</h1>
                        <h1>Mobile Application Development</h1>
                        <p>Mobile app development is the process of creating an app that is compatible with a mobile device by integrating a UI, frontend, and backend into a database.</p>
                        <a href="/contact"><button type="button">CONTACT</button></a>
                    </div>
                    <div className="service_div">
                        <h1>03.</h1>
                        <h1>UI / UX Design</h1>
                        <p>UI/UX Design focuses on creating intuitive user interfaces and optimizing user experiences to ensure functionality, accessibility, and satisfaction.</p>
                        <a href="/contact"><button type="button">CONTACT</button></a>
                    </div>
                    <div className="service_div">
                        <h1>04.</h1>
                        <h1>Frontend Development</h1>
                        <p>Front-end development is the process of building the part of the web that the user sees and interacts with (UI – User Interface). This gives the user the look and feel and usability of the web page.</p>
                        <a href="/contact"><button type="button">CONTACT</button></a>
                    </div>
                </section>
            </div>
        {/* this is footer part */}
            <Footer />
        </div>
    )
}
