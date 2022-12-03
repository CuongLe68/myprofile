import Navbar from '../Navbar/Navbar';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="contact-container">
            <Navbar active={3} />
            <header className="contact-container-title">
                <h1>
                    <span>get in</span>touch
                </h1>
                <span className="contact-container-title-block">contact</span>
            </header>
            <div className="contact-container-wrapper">
                <div className="contact-container-wrapper-left">
                    <div className="contact-container-wrapper-left-title">
                        DON'T BE SHY !
                        <span>Mọi thông tin liên hệ của mình ở bên dưới nhé, bạn có thể mail cho mình nếu thích!</span>
                    </div>
                    <div className="contact-container-wrapper-left-item">
                        <div className="contact-container-wrapper-left-item-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <p>
                            <span>ADDRESS</span>VietNam
                        </p>
                    </div>
                    <div className="contact-container-wrapper-left-item">
                        <div className="contact-container-wrapper-left-item-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <p>
                            <span>EMAIL</span>cuongle.23012001@gmail.com
                        </p>
                    </div>
                    <div className="contact-container-wrapper-left-item">
                        <div className="contact-container-wrapper-left-item-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <p>
                            <span>PHONE</span>0815972367
                        </p>
                    </div>
                    <div className="contact-container-wrapper-left-item">
                        <div
                            className="contact-container-wrapper-left-item-icon"
                            style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffb400' }}
                        >
                            Zalo
                        </div>
                        <p>
                            <span>Zalo</span>
                            <a href="https://zalo.me/0815972367">https://zalo.me/0815972367</a>
                        </p>
                    </div>
                </div>
                <div className="contact-container-wrapper-right">
                    <div className="contact-container-wrapper-right-info">
                        <input
                            className="contact-container-wrapper-right-info-des"
                            placeholder="Your name"
                            style={{ marginRight: '2rem' }}
                        />
                        <input className="contact-container-wrapper-right-info-des" placeholder="Your email" />
                    </div>
                    <input className="contact-container-wrapper-right-info-des" placeholder="Your subject" />
                    <textarea
                        className="contact-container-wrapper-right-info-message"
                        placeholder="Your messages"
                        rows="11"
                        maxLength={800}
                    />
                    <div className="contact-container-wrapper-right-btn">
                        <Link to="/contact">
                            <div className="contact-container-wrapper-right-btn-form">
                                <FontAwesomeIcon
                                    className="contact-container-wrapper-right-btn-form-icon"
                                    icon={faArrowRight}
                                />
                            </div>
                            <span>SEND MESSAGE</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
