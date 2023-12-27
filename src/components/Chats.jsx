import '../assets/styles/chats.css'
import User from './User';
import { userData } from '../utils/data';
import Admin from './Admin';
import SendBtn from './SendBtn';

const Chats = () => {
    return (
        <div className='chats'>
            <User message={userData[0].msg} />
            <Admin />
            <User message={userData[1].msg} />
            <SendBtn />
        </div>  
    )
}

export default Chats;