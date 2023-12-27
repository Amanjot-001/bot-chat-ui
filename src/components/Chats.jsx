import '../assets/styles/chats.css'
import User from './User';
import { userData } from '../utils/data';
import Admin from './Admin';
import SendBtn from './SendBtn';
import { adminData } from '../utils/data';

const Chats = () => {
    return (
        <div className='chats'>
            <User message={userData[0].msg} />
            <Admin data={adminData[0]} />
            <User message={userData[1].msg} />
            <Admin data={adminData[1]} />
            <SendBtn />
        </div>  
    )
}

export default Chats;