import React from 'react'
import Navi_bar from '../Component/Navi_bar'
import Footer from '../Component/Footer'
import first_profile from '../Images/first_profile.png'
import profile_black from '../Images/profile_black.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import linkin from '../Images/linkin.png'
import instra from '../Images/instra.png'
import tiktok from '../Images/tiktok.png'
import whatsapp from '../Images/whatsapp.png'
import enlarge from '../Images/enlarge.png'
import '../Css/contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



export default function Contact() {
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            "service_25610",
            "template_25610",
            form.current,
            "3yJKtC3DDDM8ofUmk"
        )
        .then(
            (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            },
            (error) => {
            console.log(error.text);
            alert("Error sending message.");
            }
        );
    };


    return (
        <div>
            <Navi_bar />
            <div className="conct_card">
                <div className="images_card">
                    <img src={profile_black} alt="" />
                </div>
                <div className="cont_box">
                    <div className="fill_part">
                        <h3>CONTACT</h3>
                        <h1>Let's Get in touch.</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" className="user_name" required placeholder='NAME' />
                            <input type="text" className="user_email" required placeholder='EMAIL' />
                            <textarea className="message" required placeholder="MESSAGE"></textarea>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div className="media_part">
                        <div className="first_media">
                            <a href="https://www.facebook.com/thanura.thilak">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={facebook} alt="" srcset="" />
                                        <h3>FACEBOOK</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                            <a href="https://wa.me/94701226045">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={whatsapp} alt="" srcset="" />
                                        <h3>WHATSAPP</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                        </div>
                        <div className="second_media">
                            <a href="https://www.instagram.com/thanurathilak/">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={instra} alt="" srcset="" />
                                        <h3>INSTAGRAM</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                            <a href="https://www.tiktok.com/@thanurathilak">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={tiktok} alt="" srcset="" />
                                        <h3>TIK TOK</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                        </div>
                        <div className="third_media">
                            <a href="https://www.linkedin.com/in/thanura-thilak-7b41202bb/">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={linkin} alt="" srcset="" />
                                        <h3>LINKEDIN</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                            <a href="">
                                <div className="facebook">
                                    <div className="div">
                                        <img src={twitter} alt="" srcset="" />
                                        <h3>TWITTER</h3>
                                    </div>
                                    <img src={enlarge} alt="" srcset="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
