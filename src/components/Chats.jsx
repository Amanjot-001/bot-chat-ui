import '../assets/styles/chats.css'
import User from './User';
import { userData } from '../utils/data';

const Chats = () => {
    return (
        <div className='chats'>
            <User message={userData[0].msg} />
        </div>  
    )
}

export default Chats;