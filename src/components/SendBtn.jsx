import '../assets/styles/sendBtn.css'
import send from '../assets/images/send.png'
import star from '../assets/images/star.png'

const SendBtn = () => {
    return (
        <div className="send">
            <div className="send-msg">
                <input type="text" />
                <div className='send-btn'>
                    <img src={send} alt="send icon" />
                </div>
            </div>
            <div className="suggestions">
                <img src={star} alt="star icon" />
                <div className="sug">
                    Show me more related items
                </div>
                <div className="sug">
                    Show me related logs from nexus-front-end
                </div>
            </div>
        </div>
    )
}

export default SendBtn;