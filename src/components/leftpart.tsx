import desktopLogo from '@/assets/img/logo/react.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { BsGithub, BsTiktok } from 'react-icons/bs';
import { SiUdemy } from 'react-icons/si';

const LeftPart = () => {
    return (
        <>
            <div className="arlo_tm_leftpart_wrap">
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li>
                                    <a href="https://www.udemy.com/user/eric-7039/" target='_blank' >
                                        <SiUdemy />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/askITwithERIC" target='_blank'>
                                        <FaFacebookSquare />
                                    </a>
                                </li>
                                <li><a href="https://www.youtube.com/@hoidanit" target='_blank'><GrYoutube /></a></li>

                                <li>
                                    <a href="https://www.tiktok.com/@hoidanit" target='_blank'><BsTiktok /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/haryphamdev" target='_blank'><BsGithub /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart;