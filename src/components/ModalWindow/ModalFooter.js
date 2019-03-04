import React from "react";
import Modal from 'react-bootstrap/Modal';

const ModalFooter = props => {
    const {success, loading} = props.state;

    return (
        <Modal.Footer className="modal-footer">
            <button onClick={props.submit} 
                    className={success || loading ? 'show-off' : 'btn btn-default show-on'}>
                <span>Отправить КП</span>
            </button> 
            <button onClick={props.close} className={loading ? 'show-off' : 'show-on close_modal'}>
                <span>&times;</span>
            </button>
        </Modal.Footer>
    )
}

export default ModalFooter;