import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalWindow = props => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
    <Fragment>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </Fragment>
        // <Fragment>
        //     <div className="modal fade boom" id="offer_modal" role="dialog" tabIndex="-1">
        //         <div className="vertical_align_helper">
        //           <div className="modal-dialog modal-lg screen_center price_modal vertical_align_info">
        //             <div className="modal-content">
        //               <div className="modal-body" id="display_offer">
        //                 <form action="test.php" id="submit_form_offer" method="post" name="formoffer" noValidate="" target="_blank">
        //                   <div>
        //                     <input className="cli_info cli_full_nme" maxLength="45" name="user_sirname" placeholder="ФИО" type="text" />
        //                     <div className="inpt_mail_cvr">
        //                       <input className="cli_info cli_email" name="user_mail" placeholder="Почт@" type="email" /> 
        //                       <span className="tooltips">example@mail.ru</span>
        //                     </div>
        //                   </div>
        //                 </form>
        //                 <div className="warning">
        //                   <span>Заполните форму!</span>
        //                 </div>
        //               </div>
        //               <div className="modal-footer clr_I">
        //                 <button className="btn btn-default offer_downl" id="js_but_offer" type="button">
        //                     <span>Отправить КП</span>
        //                 </button> 
        //                 <button className="close_modal" data-dismiss="modal" type="button">
        //                     <span>x</span>
        //                 </button>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="modal fade" id="js-request-good-alert" role="dialog" tabIndex="-1">
        //         <div className="vertical_align_helper">
        //           <div className="modal-dialog vertical_align_alert alert_dial">
        //             <div className="modal-content">
        //               <div className="modal-body text-center">
        //                 Уважаемый<br />
        //                 <span id="client_nme"></span><br />
        //                 Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время. Большое спасибо.
        //               </div>
        //               <div className="modal-footer clr_I alert_foot"></div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="modal fade" id="js-request-bad-alert" role="dialog" tabIndex="-1">
        //         <div className="vertical_align_helper">
        //           <div className="modal-dialog vertical_align_alert alert_dial">
        //             <div className="modal-content">
        //               <div className="modal-body text-center">
        //                 Что-то пошло не так. Ваше сообщение не отправлено.
        //               </div>
        //               <div className="modal-footer clr_I alert_foot"></div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        // </Fragment>
    )
}

export default ModalWindow;