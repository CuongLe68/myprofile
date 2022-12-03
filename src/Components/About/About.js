import './About.css';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSchool } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="about-container">
            <Navbar active={2} />
            <header className="about-container-title">
                <h1>
                    <span>about</span>me
                </h1>
                <span className="about-container-title-block">about me</span>
            </header>
            <div className="about-container-wrapper">
                <h3 className="about-container-wrapper-title">PERSONAL INFOS</h3>
                <div className="about-container-wrapper-left">
                    <div className="about-container-wrapper-left-col">
                        <p>
                            First Name: <span>Le</span>
                        </p>
                        <p>
                            Birthday: <span>21 Years</span>
                        </p>
                        <p>
                            Nationality: <span>VietNamese</span>
                        </p>
                        <p>
                            Phone: <span>0815972367</span>
                        </p>
                        <p>
                            Language: <span>Vietnamese, English</span>
                        </p>
                    </div>
                    <div className="about-container-wrapper-left-col">
                        <p>
                            Last Name: <span>Cuong</span>
                        </p>
                        <p>
                            Sex: <span>Male</span>
                        </p>
                        <p>
                            Address: <span>Da Nang</span>
                        </p>
                        <p>
                            Github: <a href="https://github.com/CuongLe68">https://github.com/CuongLe68</a>
                        </p>
                        <p>
                            Email: <span>cuongle.23012001@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div className="about-container-wrapper-right">
                    <div className="about-container-wrapper-right-col">
                        <p>
                            1
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Year working with programming languages</span>
                        </p>
                    </div>
                    <div className="about-container-wrapper-right-col">
                        <p>
                            5
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Completed Project(s)</span>
                        </p>
                    </div>
                </div>
                <div className="about-container-wrapper-skill">
                    <h3>MY SKILL</h3>
                    <div className="about-container-wrapper-skill-items">
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>HTML</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>CSS</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>SASS</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>BOOTSTRAP 4</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>REACTJS</span>
                        </div>
                        <div className="about-container-wrapper-skill-items-item">
                            <div className="about-container-wrapper-skill-items-item-box">
                                <div className="about-container-wrapper-skill-items-item-img"></div>
                            </div>
                            <span>NODEJS</span>
                        </div>
                    </div>
                </div>
                <div className="about-container-wrapper-education">
                    <h3>EDUCATION & EXPERIENCE</h3>
                    <div className="about-container-wrapper-education-items">
                        <div className="about-container-wrapper-education-items-icon">
                            <FontAwesomeIcon icon={faSchool} />
                        </div>
                        <div className="about-container-wrapper-education-items-description">
                            <div className="about-container-wrapper-education-items-description-years">
                                <span>2019 - 2023</span>
                            </div>
                            <p>
                                ĐẠI HỌC DUY TÂN UNIVERSITY, ĐÀ NẴNG, VIỆT NAM
                                <span>Chuyên ngành công nghệ thông tin - khoa công nghệ phần mềm</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
