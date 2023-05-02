import desktopLogo from '@/assets/img/logo/react.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { BsGithub, BsTiktok } from 'react-icons/bs';
import { SiUdemy } from 'react-icons/si';
import { useState } from 'react';

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {

    const [activeTab, setActiveTab] = useState<string>("home");

    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActiveTab(tab);

        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <>
            <div className={props.hideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap "}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li>
                                <a
                                    href="#home"
                                    className={activeTab === 'home' ? "active" : ""}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', event)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    className={activeTab === 'about' ? "active" : ""}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', event)}
                                >About
                                </a>
                            </li>
                            <li>
                                <a href="#skills"
                                    className={activeTab === 'skills' ? "active" : ""}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', event)}
                                >Skills
                                </a>
                            </li>
                            <li>
                                <a href="#project"
                                    className={activeTab === 'project' ? "active" : ""}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('project', event)}
                                >Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className={activeTab === 'contact' ? "active" : ""}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', event)}
                                >Contact
                                </a>
                            </li>

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
                    <a
                        className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                        href="#"
                        onClick={() => props.setHideLeftPart(!props.hideLeftPart)} //toggle
                    ><i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart;