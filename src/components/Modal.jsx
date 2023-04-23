import React, {useState} from 'react';
import '../App.css'
import Cookies from 'universal-cookie';

const Modal = ({setUser, setModal, setAuth}, props) => {
    const cookies = new Cookies();

    const register = () => {
        cookies.set('user', {user: userReg})
        setModal(false)
        setAuth(true)
        setUser(userReg)
    }

    const [userReg, setUserReg] = useState({
        firstname: '',
        lastname: '',
        mail: '',
        tel: '',
    });

    return (
        <div className='modal' onMouseDown={() => setModal(false)}>
            <div className='modal-form' onMouseDown={(e) => e.stopPropagation()}>
                <div className='list'>
                    Ім'я<input type="text" placeholder={userReg.firstname} onChange={(e) => setUserReg({...userReg, firstname: e.target.value})}/>
                    Прізвище<input type="text" placeholder={userReg.lastname} onChange={(e) => setUserReg({...userReg, lastname: e.target.value})}/>
                    Мило<input type="text" placeholder={userReg.mail} onChange={(e) => setUserReg({...userReg, mail: e.target.value})}/>
                    Телефон<input type="text" placeholder={userReg.tel} onChange={(e) => setUserReg({...userReg, tel: e.target.value})}/>
                </div>
                <div>
                    <span className='low-font'>Реєструючись, ви погоджуєтеся з умовами <a href='https://rozetka.com.ua/ua/pages/privacy/'>положення про обробку і захист персональних даних</a> та <a href="https://rozetka.com.ua/ua/pages/legal_terms/">угодою користувача</a></span>
                </div>
                <button onClick={(e) => register()}>
                    register
                </button>
            </div>
        </div>
    );
};

export default Modal;