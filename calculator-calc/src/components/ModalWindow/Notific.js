import React from "react";
import Modal from 'react-bootstrap/Modal';

const Notific = props => {
    const sent = props.prps.success !== 0;
        return sent ? (
            <Modal.Body className={'notif show-on'}>
                Уважаемый {props.prps.name},<br /><br />
                {props.prps.success > 0 ? 
                'Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время. Большое спасибо!' :
                'что-то пошло не так. Ваше сообщение не отправлено'}
            </Modal.Body>
        ) : null
}

export default Notific;