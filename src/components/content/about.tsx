import hoidanitLogo from '@/assets/img/about/hoidanit.jpeg';
import myCV from '@/assets/cv-eric.pdf';
import { TypeAnimation } from 'react-type-animation';
import { useRef, useEffect } from 'react';
import Parallax from 'parallax-js';

const About = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true
            })

            parallaxInstance.enable();
            return () => parallaxInstance.disable();
        }
    }, [])

    return (
        <>
            <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Về tác giả</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={hoidanitLogo}
                                                style={{ backgroundImage: `url(${hoidanitLogo})` }}
                                            ></div>
                                        </div>
                                        <div className="border layer" data-depth="0.6">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Hi there... I'm a
                                            &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    'Freelancer', // Types 'One'
                                                    2000, // Waits 1s
                                                    'UI/UX Designer', // Deletes 'One' and types 'Two'
                                                    2000, // Waits 2s
                                                    'Web Developer',
                                                    2000,

                                                    () => {
                                                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                                    }
                                                ]}
                                                wrapper="span"
                                                cursor={true}
                                                repeat={Infinity}
                                            // style={{ fontSize: '2em', display: 'inline-block' }}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>Xin chào, mình là Eric, hay còn được biết tới với tên gọi <strong>Hỏi Dân IT</strong>.
                                            Vốn là một lập trình viên website, cơ mà mình có sở thích không thích code _._
                                            <br /><br />
                                            Mình đã từng làm qua lĩnh vực chứng khoán, sau đấy là lĩnh vực ngân hàng.
                                            <br />
                                            Mình chọn 2 lĩnh vực này, để theo đuổi đam mê "tiền" thôi ấy mà ~.~
                                            <br /><br />
                                            Và hiện tại, mình đang 'dev cho 1 bank nào đấy ở Hà Nội'
                                        </p>
                                    </div>

                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày Sinh:</label> 30.02.199x (Gen Z)</span>
                                            </li>
                                            <li>
                                                <span><label>Giới tính:</label> Nam</span>
                                            </li>
                                            <li>
                                                <span><label>Tốt nghiệp:</label> Đại Học Back Khoa Hà Nội</span>
                                            </li>
                                            <li>
                                                <span><label>Chuyên ngành:</label> Kỹ Sư Công Nghệ Phần Mềm</span>
                                            </li>

                                            <li>
                                                <span><label>Website:</label> <a href="https://hoidanit.com.vn/" target='_blank'>www.hoidanit.com.vn</a></span>
                                            </li>
                                            <li>
                                                <span><label>Facebook:</label> <a href="https://www.facebook.com/askITwithERIC/" target='_blank'>askITwithERIC</a></span>
                                            </li>

                                            <li>
                                                <span><label>Youtube:</label> <a href="https://www.youtube.com/@hoidanit" target='_blank'>&#64;hoidanit</a></span>
                                            </li>
                                            <li>
                                                <span><label>TikTok:</label> <a href="https://www.tiktok.com/@hoidanit" target='_blank'>&#64;hoidanit</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download><span>Download CV</span></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;