import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import instra from '../Images/instra.png'
import linkin from '../Images/linkin.png'
import tiktok from '../Images/tiktok.png'

export default function Footer() {
    return (
        <div>
            <div class="stock-ticker">
                <ul>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts" s> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                </ul>

                <ul aria-hidden="true">
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="plus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                    <li class="minus">
                        <span class="company"> +++ </span>
                        <span class="price"> THANURA </span>
                        <span class="change"> +++ </span>
                        <span class="texts"> LET'S TALK </span>
                    </li>
                </ul>
            </div>
            <section>
                <div className="head">
                    <div className="logo">
                        <a href=""><img src={logo} alt="" srcset="" /></a>
                    </div>
                    <div className="information">
                        <h2>Information</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/service">Service</a></li>
                            <li><a href="/work_page">Work</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="follow">
                        <h2>Follow Us On</h2>
                        <ul>
                            <li><a href="https://www.facebook.com/thanura.thilak"><img src={facebook} alt="" srcset="" />Facebook</a></li>
                            <li><a href="https://www.instagram.com/thanurathilak/"><img src={instra} alt="" srcset="" />Instagram</a></li>
                            <li><a href=""><img src={twitter} alt="" srcset="" />Twitter</a></li>
                            <li><a href="https://www.tiktok.com/@thanurathilak"><img src={tiktok} alt="" srcset="" />Tik Tok</a></li>
                            <li><a href="https://www.linkedin.com/in/thanura-thilak-7b41202bb/"><img src={linkin} alt="" srcset="" />Linked In</a></li>
                        </ul>
                    </div>
                    <div className="contac">
                        <h2>Contact Me</h2>
                        <p>222/C, Nadun Viharaya Road,</p>
                        <p>Kiriella,</p>
                        <p>Rathnapura,</p>
                        <p>Sri Lanka.</p>
                        <p>+94 70 122 6045</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 Thanu UI/UX Designer. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    )
}
