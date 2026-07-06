import React, {Fragment} from "react";
import Modal from 'react-bootstrap/Modal';
import Input from './Input';
import Notific from './Notific';

const ModalBody = props => {
    const {success, loading} = props.state;

    return (
        <Fragment>
            <Modal.Body className={success ? 'show-off' : 'show-on'}>
                    <form className={loading ? 'opague form-offer' : 'form-offer'}>
                        <Input prps={props.state} txt={props.txt} anim={props.anim} />
                    </form>
                    <div className={loading ? 'state-two loader' : 'state-one'}>
                      Секундочку...
                    </div>
            </Modal.Body>
            <Notific prps={props.state} />
        </Fragment>
    )
}

export default ModalBody;