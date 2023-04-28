import './App.css';
import Modal from "./components/Modal";
import Cookies from 'universal-cookie';
import {useEffect, useState} from "react";

function App() {
    const cookies = new Cookies();

    const [access, setAccess] = useState(false)
    const [accessModal, setAccessModal] = useState(true)
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
            setAccess(true)
            setAccessModal(false)
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
                <Modal setUser={setUser} setModal={setModal} setAuth={setAuth} access={access}/>
            }
            {
                accessModal &&
                <div className='access'>
                    <div>
                        <span>We use cookies to improve the performance of the site. By staying on our site, you agree to the terms use of cookies. To read our Privacy and Use Policy cookies. <a
                            href="#">Click here</a>.</span>
                    </div>
                    <div className='cookie_btns'>
                        <button onClick={() => {setAccess(true);setAccessModal(false)}}>Accept all cookes</button>
                        <button onClick={() => {setAccess(false);setAccessModal(false)}}>Allow nessesary cookies only</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
