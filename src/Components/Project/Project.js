import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Project.css';

//fake data
var listProject = [
    {
        id: 1,
        Title: 'SHOPPET',
        Description:
            'Sản phẩm đầu tiên, trang web thương mại điện tử sử dụng HTML CSS và JS. Web về bán các loại thú cưng và thức ăn cho thú cưng.',
        Role: 'Frontend',
        Frontend: 'HTML, CSS, JS',
        Backend: 'null',
        Database: 'null',
        Github: 'https://github.com/CuongLe68/shoppet',
        Demo: 'https://shoppet.vercel.app',
        avatar: 'shoppet1.png',
        img1: 'shoppet1.png',
        img2: 'shoppet2.png',
        img3: 'shoppet3.png',
        img4: 'shoppet14.png',
    },
    {
        id: 2,
        Title: 'SNAKE',
        Description: 'Trang web thương mại điện tử sử dụng HTML SCSS và JS. Giao diện website bán các loại giày.',
        Role: 'Frontend',
        Frontend: 'HTML, SCSS, JS',
        Backend: 'null',
        Database: 'null',
        Github: 'https://github.com/CuongLe68/GiayTheThao',
        Demo: 'https://cuongle68.github.io/GiayTheThao/',
        avatar: 'giaythethao1.png',
        img1: 'giaythethao1.png',
        img2: 'giaythethao2.png',
        img3: 'giaythethao3.png',
        img4: 'giaythethao3.png',
    },
    {
        id: 3,
        Title: 'PROFILE',
        Description:
            'Trang web profile cá nhân sử dụng HTML, CSS và JS. Web về thông tin cá nhân bản thân,thông tin liên lạc, các sở thích và mục tiêu tương lai!',
        Role: 'Frontend',
        Frontend: 'HTML, CSS, JS, ReactJS',
        Backend: 'null',
        Database: 'null',
        Github: 'https://github.com/CuongLe68/myprofile',
        Demo: 'https://cuongle.vercel.app/',
        avatar: 'profile1.png',
        img1: 'profile1.png',
        img2: 'profile2.png',
        img3: 'profile3.png',
        img4: 'profile4.png',
    },
    {
        id: 4,
        Title: 'COURSES',
        Description:
            'Trang web đầu tiên sử dụng Bootstrap và NodeJs. Web về CURD khóa học, khôi phục và xem video khóa học.',
        Role: 'Frontend',
        Frontend: 'HTML, CSS, JS, Bootstrap',
        Backend: 'NodeJS',
        Database: 'MongoDB',
        Github: 'https://github.com/CuongLe68/courses',
        Demo: 'null',
        avatar: 'course4.png',
        img1: 'course1.png',
        img2: 'course2.png',
        img3: 'course3.png',
        img4: 'course4.png',
    },
    {
        id: 5,
        Title: 'CLONE VCB',
        Description:
            'Trang web clone về ngân hàng VietComBank. Web về CURD account, đăng ký, đằn nhập, phân quyền, chuyển tiền, nhắn tin, sử dụng thư viện socket.io, sử dụng usename và pass tại README github để test.',
        Role: 'Frontend',
        Frontend: 'HTML, CSS, JS, ReactJS, ReduxToolkit',
        Backend: 'NodeJS, Socket.io',
        Database: 'MongoDB',
        Github: 'https://github.com/CuongLe68/bank',
        Demo: 'null',
        avatar: 'vcb2.png',
        img1: 'vcb1.png',
        img2: 'vcb2.png',
        img3: 'vcb3.png',
        img4: 'vcb4.png',
    },
];

function Project() {
    const handleProject = (e) => {
        if (e.className === 'project-container-body-item1') {
            document.querySelector('.project-container-body-item1').style.backgroundColor = '#ffb400';
            document.querySelector('.project-container-body-item2').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item3').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item4').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-items-item1').style.display = 'flex';
            document.querySelector('.project-container-body-items-item2').style.display = 'flex';
            document.querySelector('.project-container-body-items-item3').style.display = 'flex';
            document.querySelector('.project-container-body-items-item4').style.display = 'flex';
            document.querySelector('.project-container-body-items-item5').style.display = 'flex';
        }
        if (e.className === 'project-container-body-item2') {
            document.querySelector('.project-container-body-item1').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item2').style.backgroundColor = '#ffb400';
            document.querySelector('.project-container-body-item3').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item4').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-items-item1').style.display = 'flex';
            document.querySelector('.project-container-body-items-item2').style.display = 'flex';
            document.querySelector('.project-container-body-items-item3').style.display = 'none';
            document.querySelector('.project-container-body-items-item4').style.display = 'none';
            document.querySelector('.project-container-body-items-item5').style.display = 'none';
        }
        if (e.className === 'project-container-body-item3') {
            document.querySelector('.project-container-body-item1').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item2').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item3').style.backgroundColor = '#ffb400';
            document.querySelector('.project-container-body-item4').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-items-item1').style.display = 'none';
            document.querySelector('.project-container-body-items-item2').style.display = 'none';
            document.querySelector('.project-container-body-items-item3').style.display = 'none';
            document.querySelector('.project-container-body-items-item4').style.display = 'flex';
            document.querySelector('.project-container-body-items-item5').style.display = 'none';
        }
        if (e.className === 'project-container-body-item4') {
            document.querySelector('.project-container-body-item1').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item2').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item3').style.backgroundColor = '#ffffff1a';
            document.querySelector('.project-container-body-item4').style.backgroundColor = '#ffb400';
            document.querySelector('.project-container-body-items-item1').style.display = 'none';
            document.querySelector('.project-container-body-items-item2').style.display = 'none';
            document.querySelector('.project-container-body-items-item3').style.display = 'none';
            document.querySelector('.project-container-body-items-item4').style.display = 'none';
            document.querySelector('.project-container-body-items-item5').style.display = 'flex';
        }
    };

    //show info project
    const [currentProject, setCurrentProject] = useState('');
    const handleInfo = (e) => {
        const box = document.querySelector('.project-container-wrapper');
        box.style.display = 'flex';
        listProject.map((item) => {
            return `project-container-body-items-item${item.id}` === e.className ? setCurrentProject(item) : '';
        });
    };

    //close info project
    const closeInfo = () => {
        const box = document.querySelector('.project-container-wrapper');
        box.style.display = 'none';
    };

    //lightbox
    let CURRENT_SLIDE = 0;
    let LAST_SLIDE = 0;
    const handleLightbox = (e) => {
        CURRENT_SLIDE = Number(e.className.split(' ', 2)[1].split('-')[3]); //set current slide

        //handle img slides show
        handleSlides(e);

        //handle img lightbox
        document.querySelector(`.project-container-wrapper-box-item-slide-${LAST_SLIDE}`).style.background =
            'var(--background-hover)'; //làm mờ ảnh trước
        document.querySelector(`.project-container-wrapper-box-item-slide-${CURRENT_SLIDE}`).style.background =
            'transparent'; //hiển thị ảnh vừa click
        LAST_SLIDE = CURRENT_SLIDE;
    };

    //slides
    const handleSlides = (e) => {
        const slides = document.querySelectorAll('.project-container-wrapper-box-item-imgs-img');
        if (e.classList[1] === 'project-container-wrapper-box-item-left-next') {
            CURRENT_SLIDE++;
            if (CURRENT_SLIDE < 4) {
                slides[CURRENT_SLIDE - 1].style.width = '0';
                slides[CURRENT_SLIDE].style.width = '100%';
            } else {
                CURRENT_SLIDE = 3;
            }
        } else if (e.classList[1] === 'project-container-wrapper-box-item-left-prev') {
            CURRENT_SLIDE--;
            if (CURRENT_SLIDE >= 0) {
                slides[CURRENT_SLIDE + 1].style.width = '0';
                slides[CURRENT_SLIDE].style.width = '100%';
            } else {
                CURRENT_SLIDE = 0;
            }
        } else {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.width = '0';
            }
            slides[CURRENT_SLIDE].style.width = '100%';
        }

        //Ẩn hiện icon
        if (CURRENT_SLIDE > 0) {
            document.querySelector('.project-container-wrapper-box-item-left-prev>svg').style.opacity = '1';
            document.querySelector('.project-container-wrapper-box-item-left-prev>svg').style.cursor = 'pointer';
        } else if (CURRENT_SLIDE === 0) {
            document.querySelector('.project-container-wrapper-box-item-left-prev>svg').style.opacity = '0.4';
            document.querySelector('.project-container-wrapper-box-item-left-prev>svg').style.cursor = 'default';
        }

        if (CURRENT_SLIDE < 3) {
            document.querySelector('.project-container-wrapper-box-item-left-next>svg').style.opacity = '1';
            document.querySelector('.project-container-wrapper-box-item-left-next>svg').style.cursor = 'pointer';
        } else if (CURRENT_SLIDE === 3) {
            document.querySelector('.project-container-wrapper-box-item-left-next>svg').style.opacity = '0.4';
            document.querySelector('.project-container-wrapper-box-item-left-next>svg').style.cursor = 'default';
        }
    };
    return (
        <div className="project-container">
            <Navbar active={1} />
            <header className="project-container-title">
                <h1>
                    <span>My</span>project
                </h1>
                <span className="project-container-title-block">works</span>
            </header>
            {/* show box */}
            <div className="project-container-wrapper">
                <div className="project-container-wrapper-box">
                    <div className="project-container-wrapper-box-icon" onClick={() => closeInfo()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="project-container-wrapper-box-item">
                        <div className="project-container-wrapper-box-item-left">
                            <h3 className="project-container-wrapper-box-item-title">{currentProject.Title}</h3>
                            <div
                                className="project-container-wrapper-box-item-left-icon project-container-wrapper-box-item-left-prev"
                                onClick={(e) => handleSlides(e.currentTarget)}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className="project-container-wrapper-box-item-imgs">
                                <div className="project-container-wrapper-box-item-imgs-img"></div>
                                <div className="project-container-wrapper-box-item-imgs-img"></div>
                                <div className="project-container-wrapper-box-item-imgs-img"></div>
                                <div className="project-container-wrapper-box-item-imgs-img"></div>
                            </div>
                            <div
                                className="project-container-wrapper-box-item-left-icon project-container-wrapper-box-item-left-next"
                                onClick={(e) => handleSlides(e.currentTarget)}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div className="project-container-wrapper-box-item-slides">
                                <div
                                    className="project-container-wrapper-box-item-slide project-container-slide-0"
                                    onClick={(e) => handleLightbox(e.currentTarget)}
                                >
                                    <div className="project-container-wrapper-box-item-slide-0"></div>
                                </div>
                                <div
                                    className="project-container-wrapper-box-item-slide project-container-slide-1"
                                    onClick={(e) => handleLightbox(e.currentTarget)}
                                >
                                    <div className="project-container-wrapper-box-item-slide-1"></div>
                                </div>
                                <div
                                    className="project-container-wrapper-box-item-slide project-container-slide-2"
                                    onClick={(e) => handleLightbox(e.currentTarget)}
                                >
                                    <div className="project-container-wrapper-box-item-slide-2"></div>
                                </div>
                                <div
                                    className="project-container-wrapper-box-item-slide project-container-slide-3"
                                    onClick={(e) => handleLightbox(e.currentTarget)}
                                >
                                    <div className="project-container-wrapper-box-item-slide-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="project-container-wrapper-box-item-right">
                            <h3 className="project-container-wrapper-box-item-title">PROFILE {currentProject.Title}</h3>
                            <span>{currentProject.Description}</span>
                            <span>Role: {currentProject.Role}</span>
                            <span>Fronted: {currentProject.Frontend}</span>
                            <span>Backend: {currentProject.Backend}</span>
                            <span>Database: {currentProject.Database}</span>
                            <span>
                                Github: <a href={currentProject.Github}>{currentProject.Github}</a>
                            </span>
                            <span>
                                Demo: <a href={currentProject.Demo}>{currentProject.Demo}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-container-body">
                {/* info project */}
                <ul>
                    <li className="project-container-body-item1" onClick={(e) => handleProject(e.currentTarget)}>
                        ALL
                    </li>
                    <li className="project-container-body-item2" onClick={(e) => handleProject(e.currentTarget)}>
                        HTML/CSS,SCSS/JS
                    </li>
                    <li className="project-container-body-item3" onClick={(e) => handleProject(e.currentTarget)}>
                        BootStrap 4/NodeJS
                    </li>
                    <li className="project-container-body-item4" onClick={(e) => handleProject(e.currentTarget)}>
                        ReactJS/NodeJS/MongoDB
                    </li>
                </ul>

                <div className="project-container-body-items">
                    <div className="project-container-body-items-item1" onClick={(e) => handleInfo(e.currentTarget)}>
                        <h3>shoppet</h3>
                    </div>
                    <div className="project-container-body-items-item2" onClick={(e) => handleInfo(e.currentTarget)}>
                        <h3>snake</h3>
                    </div>
                    <div className="project-container-body-items-item3" onClick={(e) => handleInfo(e.currentTarget)}>
                        <h3>profile</h3>
                    </div>
                    <div className="project-container-body-items-item4" onClick={(e) => handleInfo(e.currentTarget)}>
                        <h3>courses</h3>
                    </div>
                    <div className="project-container-body-items-item5" onClick={(e) => handleInfo(e.currentTarget)}>
                        <h3>bank</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
