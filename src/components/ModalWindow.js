import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalWindow = props => {
  const {comOffer, services, json} = props.st;

  // const send = () => {
  //     const arr = services.filter(i => i.clicked)[0];
  //     const attest = arr.attestClick ? arr.attestat : 0;
  //     const rtn = arr.rtn;
  //     const base = arr.base.filter((item, index) => !(index % 2)).map(i => `<p class="base_dop_item">'${i}'</p><hr>`);
  //     const JSONbase = JSON.stringify(base);
  //     const basePrice = arr.basePrice;
  //     const dopi = arr.dopi.map(i => i[0]).filter((item, index) => arr.dopiClick[index] && !(index % 2));
  //     const JSONdopi = JSON.stringify(dopi);

  //     console.log(JSONdopi);
  // }

return (
        <Fragment>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={comOffer} onHide={props.funcII} animation={false} centered>
                      <Modal.Body>
                        <form action="test.php" id="submit_form_offer" method="post" name="formoffer" noValidate="" target="_blank">
                          <div>
                            <input type='HIDDEN' name={json[0]}></input>
                            <input type='HIDDEN' name={json[1]}></input>
                            <input type='HIDDEN' name={json[2]}></input>
                            <input type='HIDDEN' name={json[3]}></input>
                            <input type='HIDDEN' name={json[4]}></input>
                            <input type='HIDDEN' name={json[5]}></input>
                            <input type='HIDDEN' name={json[6]}></input>
                            <input type='HIDDEN' name={json[7]}></input>
                            <input type='HIDDEN' name={json[8]}></input>
                            <input className="cli_info cli_full_nme" maxLength="45" name="user_sirname" placeholder="ФИО" type="text" />
                            <div className="inpt_mail_cvr">
                              <input className="cli_info cli_email" name="user_mail" placeholder="Почт@" type="email" /> 
                              <span className="tooltips">example@mail.ru</span>
                            </div>
                          </div>
                        </form>
                        <div className="warning">
                          <span>Заполните форму!</span>
                        </div>
                        {json}
                      </Modal.Body>
                      <Modal.Footer className="clr_I">
                        <button onClick={props.funcIII} className="btn btn-default">
                            <span>Отправить КП</span>
                        </button> 
                        <button onClick={props.funcII} className="close_modal">
                            <span>&times;</span>
                        </button>
                      </Modal.Footer>

                    {/* <Modal.Body>
                        Уважаемый<br />
                        <span id="client_nme"></span><br />
                        Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время. Большое спасибо.
                    </Modal.Body>
                        <Modal.Footer></Modal.Footer> */}


              {/* <div className="modal fade" id="js-request-bad-alert" role="dialog" tabIndex="-1">
                <div className="vertical_align_helper">
                  <div className="modal-dialog vertical_align_alert alert_dial">
                    <div className="modal-content">
                      <div className="modal-body text-center">
                        Что-то пошло не так. Ваше сообщение не отправлено.
                      </div>
                      <div className="modal-footer clr_I alert_foot"></div>
                    </div>
                  </div>
                </div>
              </div> */}
        </Modal>
        </Fragment>
    )
}

export default ModalWindow;