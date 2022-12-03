import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/imgs/gian.jpg';
import Navbar from '../Navbar/Navbar';
import { faArrowRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <Navbar active={0} />
            <div className="home-container-block"></div>
            <div className="home-container-wrapper">
                <div className="home-container-wrapper-img">
                    <img src={logo} alt="" />
                </div>
                <div className="home-container-wrapper-description">
                    <div className="home-container-wrapper-description-title">
                        <FontAwesomeIcon icon={faMinus} />
                        <h1>
                            I'M LE QUOC CUONG
                            <span>WEB DEVELOPER !</span>
                        </h1>
                    </div>
                    <span>
                        Hello mọi người! Đây là Cường, đang là sinh viên năm 4 trường đại học Duy Tân - TP Đà Nẵng.
                        Cường là người được Vô Danh thần tăng nhắc đến như một đại cao thủ đệ nhất của Thiếu Lâm phái
                        trong 200 năm trở lại thời điểm đó. Theo lời của Vô Danh thần tăng, Cường mang "một thân tuyệt
                        kỹ", là nhân tài võ học và cũng là người thông thạo nhiều nhất 72 tuyệt kỹ giải thuật. Thông
                        thường, các cao thủ võ lâm chỉ học được 2-3 môn(Html, Css, Javascript) là có thể gia nhập vào
                        giới "giang hồ" nhưng Cường đã luyện thêm 2 tuyệt kỹ(ReactJS, NodeJS), cộng với việc luyện thành
                        công 300 bài code thiếu nhi đã thất truyền, nội lực càng tăng thêm bội phần. Cường cũng chính là
                        1 trong hàng triệu người "duy nhất" luyện thành 300 bài code thiếu nhi.
                    </span>
                    <div className="home-container-wrapper-description-wrapper">
                        <Link to="/project">
                            <div className="home-container-wrapper-description-wrapper-btn">
                                <FontAwesomeIcon
                                    className="home-container-wrapper-description-wrapper-btn-icon"
                                    icon={faArrowRight}
                                />
                            </div>
                            <span className="span">PROJECT</span>
                        </Link>
                        <Link to="/about">
                            <div className="home-container-wrapper-description-wrapper-btn">
                                <FontAwesomeIcon
                                    className="home-container-wrapper-description-wrapper-btn-icon"
                                    icon={faArrowRight}
                                />
                            </div>
                            <span className="span">ABOUT</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
