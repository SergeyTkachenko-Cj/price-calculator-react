import React, {Fragment} from "react";
import Modal from 'react-bootstrap/Modal';

const ModalBody = props => {
    const {name, email, nameValid, emailValid, success, loading} = props.state;

    return (
        <Fragment>
        <Modal.Body className={success ? 'show-off' : 'show-on'}>
                <form className={loading ? 'opague form-offer' : 'form-offer'}>
                  <div>
                    <input onChange={e => props.txt(e)}
                           onAnimationEnd={() => props.anim('nameValid')} 
                           defaultValue={name} 
                           className={nameValid ? "cli_info cli_full_nme" : "cli_info cli_full_nme anima"} 
                           maxLength="45" 
                           name="name" 
                           placeholder="ФИО" 
                           type="text" />
                    <div className="inpt_mail_cvr">
                    <input onChange={e => props.txt(e)} 
                           onAnimationEnd={() => props.anim('emailValid')}
                           defaultValue={email} 
                           className={emailValid ? "cli_info cli_email" : "cli_info cli_email anima"} 
                           name="email" 
                           placeholder="Почт@" 
                           type="email" /> 
                    <span className="tooltips">example@mail.ru</span>
                    </div>
                  </div>
                </form>
                <div className={loading ? 'state-two loader' : 'state-one'}>
                  Секундочку...
                </div>
        </Modal.Body>
        <Modal.Body className={success > 0 ? 'notif show-on' : 'show-off'}>
            Уважаемый {name},<br /><br />
            Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время. Большое спасибо!
        </Modal.Body>
        <Modal.Body className={success < 0 ? 'notif show-on' : 'show-off'}>
            Уважаемый {name},<br /><br />
            что-то пошло не так. Ваше сообщение не отправлено
        </Modal.Body>
        </Fragment>
    )
}

export default ModalBody;