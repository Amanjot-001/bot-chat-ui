import PropTypes from 'prop-types';
import '../assets/styles/admin.css'
import logo from '../assets/images/logo.png'
import alert from '../assets/images/warning.png'

const Admin = ({ data }) => {
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
                {data.msg}
            </div>
            <div className="response">
                <img src={alert} alt="alert icon" />
                <span className="res-msg">
                    High Traffic Alert: Traffic Volume Exceeded Threshold on
                </span>
                <span className="repo">
                    nexus-frontend
                </span>
                <span className="commit-time">
                    08:50 AM
                </span>
            </div>
            <div className="response">
                <img src={alert} alt="alert icon" />
                <span className="res-msg">
                    Error Rate Alert: Error Frequency Surpassed Threshold on
                </span>
                <span className="repo">
                    nexus-frontend
                </span>
                <span className="commit-time">
                    08:50 AM
                </span>
            </div>
        </div>
    )
}

Admin.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Admin;