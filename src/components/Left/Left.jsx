import React from 'react'
import './Left.scss'
import user from '../../Assets/Img/img.jpg'
import { Link } from 'react-router-dom'

function Left() {
    return (
        <div className='section-left'>
            <div className="left">
                <div className="left__top">
                    <div className="img">
                        <img src={user} alt="user" title='Asadbek'/>
                    </div>
                    <div className="context">
                        <h3 className='title'>Anvarov Asadbek</h3>
                        <p className='text'>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Similique nisi harum ex.
                        </p>
                        <ul className="list">
                            <Link target={"_blank"} to={"https://github.com/tuit212"}
                                className="item" title='github'> 
                                <i class="fa-brands fa-github"></i>
                            </Link>
                            <Link target={"_blank"} to={"https://www.instagram.com/asadbek.2305/"} 
                                className="item" title='instagram'>
                                <i class="fa-brands fa-instagram"></i>
                            </Link>
                            <Link target={"_blank"} to={"https://t.me/tuit_212"}
                                className="item" title='telegram'>
                                <i class="fa-brands fa-telegram"></i>
                            </Link>
                            <Link target={"_blank"} to={"https://www.linkedin.com/feed/"} 
                                className="item" title='linkedin'>
                                <i class="fa-brands fa-linkedin"></i>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="left__center">
                    <div className="center">
                        <h2>My experiences</h2>
                        <ul className="list">
                            <li className="item">
                                <span>Html</span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                            <li className="item">
                                <span>Css <span>and</span> Scss </span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                            <li className="item">
                                <span>Bootstrap</span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                            <li className="item">
                                <span>Javascript</span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                            <li className="item">
                                <span>React js</span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="left__bottom">
                    <div className="center">
                        <h3>Language</h3>
                        <ul className="list">
                            <li className="item">
                                <span>Eng</span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                            <li className="item">
                                <span>  Uzb </span>
                                <div className="show">
                                    <span className="block"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left
