import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar';
import './Project.css';

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
    const handleInfo = () => {
        const box = document.querySelector('.project-container-wrapper');
        box.style.display = 'flex';
    };

    //close info project
    const closeInfo = () => {
        const box = document.querySelector('.project-container-wrapper');
        box.style.display = 'none';
    };

    //slide
    let CURRENT_SLIDE = 0;
    const handleSlides = (e) => {
        if (e.classList[1] === 'project-container-wrapper-box-item-left-next') {
            CURRENT_SLIDE++;
            const slides = document.querySelectorAll('.project-container-wrapper-box-item-imgs-img');
            if (CURRENT_SLIDE < 4) {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.width = '0';
                }
                slides[CURRENT_SLIDE].style.width = '100%';
            } else {
                CURRENT_SLIDE = 3;
            }
        } else {
            CURRENT_SLIDE--;
            const slides = document.querySelectorAll('.project-container-wrapper-box-item-imgs-img');
            if (CURRENT_SLIDE >= 0) {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.width = '0';
                }
                slides[CURRENT_SLIDE].style.width = '100%';
            } else {
                CURRENT_SLIDE = 0;
            }
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
                            <h3 className="project-container-wrapper-box-item-title">SHOPPET</h3>
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
                                <div className="project-container-wrapper-box-item-slide"></div>
                                <div className="project-container-wrapper-box-item-slide"></div>
                                <div className="project-container-wrapper-box-item-slide"></div>
                                <div className="project-container-wrapper-box-item-slide"></div>
                            </div>
                        </div>
                        <div className="project-container-wrapper-box-item-right">
                            <h3 className="project-container-wrapper-box-item-title">PROFILE SHOPPET</h3>
                            <span>
                                Sản phẩm đầu tiên, trang web thương mại điện tử sử dụng HTML, CSS và JS. Web về bán các
                                loại thú cưng và thức ăn cho thú cưng.
                            </span>
                            <span>Role: Frontend</span>
                            <span>Fronted: HTML, CSS, JS</span>
                            <span>Backend: null</span>
                            <span>
                                Github:{' '}
                                <a href="https://github.com/CuongLe68/shoppet">https://github.com/CuongLe68/shoppet</a>
                            </span>
                            <span>
                                Demo: <a href="https://shoppet.vercel.app/">https://shoppet.vercel.app</a>
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
                    <div className="project-container-body-items-item1" onClick={() => handleInfo()}>
                        <h3>shoppet</h3>
                    </div>
                    <div className="project-container-body-items-item2" onClick={() => handleInfo()}>
                        <h3>snake</h3>
                    </div>
                    <div className="project-container-body-items-item3" onClick={() => handleInfo()}>
                        <h3>profile</h3>
                    </div>
                    <div className="project-container-body-items-item4" onClick={() => handleInfo()}>
                        <h3>courses</h3>
                    </div>
                    <div className="project-container-body-items-item5" onClick={() => handleInfo()}>
                        <h3>bank</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
