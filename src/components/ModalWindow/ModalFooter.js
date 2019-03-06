import React from "react";
import Modal from 'react-bootstrap/Modal';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
            <Loader visible={loading} type="Circles" color="#1d8a5b" height={45} width={45} />
        </Modal.Footer>
    )
}

export default ModalFooter;