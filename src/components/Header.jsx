import '../assets/styles/header.css'
import logo from '../assets/images/logo.png'
import close from '../assets/images/close.png'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="onepane logo" />
                <p>Copilot</p>
            </div>
            <div className="close-btn">
                <img src={close} alt="cross icon" />
            </div>
        </header>
    )
}

export default Header;