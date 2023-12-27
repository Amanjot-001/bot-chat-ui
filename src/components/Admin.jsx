import '../assets/styles/admin.css'
import logo from '../assets/images/logo.png'

const Admin = () => {
    return (
        <div className="admin">
            <div className="admin-detail">
                <div className="admin-info">
                    <img src={logo} alt="user icon" />
                    <p>Copilot</p>
                </div>
                <div className="time">
                    Just Now
                </div>
            </div>
            <div className="admin-msg">
                hahhf hahhf a hh
            </div>
        </div>
    )
}

export default Admin;