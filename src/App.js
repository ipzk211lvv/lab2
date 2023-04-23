import './App.css';
import Modal from "./components/Modal";
import Cookies from 'universal-cookie';
import {useEffect, useState} from "react";

function App() {
    const cookies = new Cookies();

    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        mail: '',
        tel: '',
    });
    useEffect(() => {
        if (cookies.get('user')) {
            setAuth(true)
            setUser(cookies.get('user').user)
        }
    }, [])

    const [modal, setModal] = useState(false);

    return (
        <div>
            <h6>ROZETKA</h6>
            <div className='list'>
                <span>firstname: {user?.firstname}</span>
                <span>lastname: {user.lastname}</span>
                <span>mail: {user.mail}</span>
                <span>tel: {user.tel}</span>
            </div>

            {
                !auth
                    ? <button onClick={() => setModal(true)}>register</button>
                    : <button onClick={() => {setAuth(false); cookies.remove('user')}}>logout(del account)</button>
            }
            {
                modal &&
                <Modal setUser={setUser} setModal={setModal} setAuth={setAuth}/>
            }
        </div>
    );
}

export default App;
