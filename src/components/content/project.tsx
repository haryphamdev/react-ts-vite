import { Button, Modal } from 'antd';
import { useState } from 'react';
import { IoLogoReact } from 'react-icons/io5';
import { BsArrowRight, BsInstagram, BsTwitter } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { AiFillFacebook } from 'react-icons/ai';

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: number;
        role: string;
        demo: string;
        github: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const dataProjects: IProject[] = [
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "Tiki Clone",
            shortDescription: "Website thương mại điện tử hỗ trợ & quản lý mua bán sách",
            detail: {
                description: "(Self-learning) Xây dựng website thương mại điện tử clone Tiki",//miêu tả dự án làm gì
                frontend: "React (Typescript), Redux Toolkit, Ant Design", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 1,// bao nhiêu members
                role: "Developer",// vai trò trong dự án
                demo: "https://react.hoidanit.com.vn/", //link video,  link deploy
                github: "https://github.com/haryphamdev/react-ts-vite", //link github,
            },

        },
        {
            image: <DiNodejsSmall
                size={50}
                color={'#00a80c'}
            />,
            title: "Bookingcare Clone",
            shortDescription: "Website hỗ trợ đặt lịch khám bệnh dành cho bệnh viện và các phòng khám",
            detail: {
                description: "(Self-learning) Xây dựng website đặt lịch khám bệnh, clone website bookingcare.vn",//miêu tả dự án làm gì
                frontend: "React (Typescript), Redux Toolkit, Ant Design", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 1,// bao nhiêu members
                role: "Developer",// vai trò trong dự án
                demo: "https://react.hoidanit.com.vn/", //link video,  link deploy
                github: "https://github.com/haryphamdev/react-ts-vite", //link github,
            },
        },
        {
            image: <AiFillFacebook
                size={50}
                color={'#4096ff'}
            />,
            title: "Facebook Clone",
            shortDescription: "Website mạng xã hội giúp kết nối mọi người có cùng chung sở thích",
            detail: {
                description: "(Self-learning) Xây dựng mạng xã hội giúp kết nối mọi người",//miêu tả dự án làm gì
                frontend: "React (Typescript), Redux Toolkit, Ant Design", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 1,// bao nhiêu members
                role: "Developer",// vai trò trong dự án
                demo: "https://react.hoidanit.com.vn/", //link video,  link deploy
                github: "https://github.com/haryphamdev/react-ts-vite", //link github,
            },
        },
        {
            image: <BsTwitter
                size={50}
                color={'#4096ff'}
            />,
            title: "Twitter Clone",
            shortDescription: "Website mạng xã hội giúp kết nối mọi người có cùng chung sở thích",
            detail: {
                description: "(Self-learning) Xây dựng mạng xã hội giúp kết nối mọi người",//miêu tả dự án làm gì
                frontend: "React (Typescript), Redux Toolkit, Ant Design", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 1,// bao nhiêu members
                role: "Developer",// vai trò trong dự án
                demo: "https://react.hoidanit.com.vn/", //link video,  link deploy
                github: "https://github.com/haryphamdev/react-ts-vite", //link github,
            },
        },
        {
            image: <BsInstagram
                size={50}
                color={'#e84a65'}
            />,
            title: "Instagram Clone",
            shortDescription: "Website mạng xã hội giúp kết nối mọi người có cùng chung sở thích",
            detail: {
                description: "(Self-learning) Xây dựng mạng xã hội giúp kết nối mọi người",//miêu tả dự án làm gì
                frontend: "React (Typescript), Redux Toolkit, Ant Design", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 1,// bao nhiêu members
                role: "Developer",// vai trò trong dự án
                demo: "https://react.hoidanit.com.vn/", //link video,  link deploy
                github: "https://github.com/haryphamdev/react-ts-vite", //link github,
            },
        }
    ]

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }
    return (
        <>
            <Modal
                title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""}
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
            >
                {dataDetail &&
                    <ul>
                        <li>Miêu tả: {dataDetail.detail.description}</li>
                        <li>Frontend: {dataDetail.detail.frontend}</li>
                        <li>Backend: {dataDetail.detail.backend}</li>
                        <li>Số lượng thành viên dự án: {dataDetail.detail.member}</li>
                        <li>Vai trò: {dataDetail.detail.role}</li>
                        <li>
                            Demo:
                            <a href={dataDetail.detail.demo} target='_blank'>
                                {dataDetail.detail.demo}
                            </a>
                        </li>
                        <li>
                            Github:
                            <a href={dataDetail.detail.github} target='_blank'>
                                {dataDetail.detail.github}
                            </a>
                        </li>
                    </ul>
                }
            </Modal>

            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div
                                                className="inner" title="Xem Chi Tiết"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item)
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className="view_detail" style={{ padding: "5px 0" }}>
                                                    <span style={{ cursor: "pointer" }}>
                                                        <BsArrowRight />
                                                        &nbsp;
                                                        Xem Chi Tiết
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;