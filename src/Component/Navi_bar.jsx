import React from 'react'
import logo from '../Images/logo.png'
import './navi.css'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

export default function Navi_bar() {
    return (
        <div>
            <nav>
                <div className="sidebar">
                    <Link to="/">
                        <img src={logo} alt="" srcset="" />
                    </Link>
                    <ul>
                        <Link to="/"><a href="">HOME</a></Link>
                        <Link to="/service"><a href="">SERVICES</a></Link>
                        <Link to="/work_page"><a href="">WORK</a></Link>
                        <Link to="/about"><a href="">ABOUT</a></Link>
                        <Link to="/contact"><a href="">CONTACT</a></Link>
                    </ul>
                    <Link to="/contact">
                        <button type="button">HIRE ME</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
