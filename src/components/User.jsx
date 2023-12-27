import PropTypes from 'prop-types';
import '../assets/styles/user.css'
import profile from '../assets/images/profile.png'

const User = ({ message }) => {
    return (
        <div className="user">
            <div className="user-detail">
                <div className="time">
                    Just Now
                </div>
                <div className="user-info">
                    <p>You</p>
                    <img src={profile} alt="user icon" />
                </div>
            </div>
            <div className="user-msg">
                {message}
            </div>
        </div>
    )
}

User.propTypes = {
    message: PropTypes.string.isRequired,
};

export default User;