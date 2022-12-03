import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar(props) {
    //toggle background
    const handleLight = () => {
        const icons = document.querySelectorAll('.navbar-container-bulb>svg');
        const toggleColor = document.querySelector('#root>div');
        for (let i = 0; i < icons.length; i++) {
            if (icons[i].className.animVal.includes('active')) {
                icons[i].classList.remove('active');
                icons[i].style.display = 'none';
            } else {
                icons[i].classList.add('active');
                icons[i].style.display = 'block';
            }
        }
        toggleColor.classList.toggle('light');
    };

    //handle active page
    var actives = document.querySelectorAll('.navbar-container-menu-item');

    const handleActive = (classActive) => {};

    /* LỖI SỬA CLASS NHƯNG KHÔNG RENDER LẠI PAGE, thay đổi nội dung file này rồi lưu mới hiển thị*/

    for (var i = 0; i < actives.length; i++) {
        //remove hết class active
        actives[i].classList.remove('active');

        //add class active cho class tương ứng
        actives[props.active].classList.add('active');

        // console.log(props.active, actives[props.active].className);
    }

    return (
        <div className="navbar-container">
            <div className="navbar-container-bulb" onClick={() => handleLight()}>
                <FontAwesomeIcon icon={faSun} className="active" />
                <FontAwesomeIcon icon={faMoon} style={{ display: 'none' }} />
            </div>

            {/* Menu */}
            <div className="navbar-container-menu">
                <Link to="/" className="navbar-container-menu-item 0" onClick={(e) => handleActive(e.currentTarget)}>
                    <div className="navbar-container-menu-item-title">Home</div>
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link
                    to="/project"
                    className="navbar-container-menu-item 1"
                    onClick={(e) => handleActive(e.currentTarget)}
                >
                    <div className="navbar-container-menu-item-title">project</div>
                    <FontAwesomeIcon icon={faBriefcase} />
                </Link>
                <Link
                    to="/about"
                    className="navbar-container-menu-item 2"
                    onClick={(e) => handleActive(e.currentTarget)}
                >
                    <div className="navbar-container-menu-item-title">about</div>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link
                    to="/contact"
                    className="navbar-container-menu-item 3"
                    onClick={(e) => handleActive(e.currentTarget)}
                >
                    <div className="navbar-container-menu-item-title">contact</div>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
