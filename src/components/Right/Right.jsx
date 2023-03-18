import React from 'react'
import './Right.scss'
import { NavLink } from 'react-router-dom'

function Right() {
    return (
        <div className='section-right'>
            <div className="right">
                <div className="nav">
                    <NavLink to={"/"} className="navbar">
                        <span className='span'>home</span>
                        <i class="fa-solid fa-house"></i>
                        <audio autoPlay src='../../sounds/kick.wav' ></audio>
                    </NavLink>
                    <NavLink to={"/portfolio"} className="navbar">
                        <span className='span'>portfolio</span>
                        <i class="fa-solid fa-briefcase"></i>
                    </NavLink>
                    <NavLink to={"/myContact"} className="navbar">
                        <span className='span'>contact</span>
                        <i class="fa-solid fa-envelope"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Right
