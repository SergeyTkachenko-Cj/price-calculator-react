import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"; 

const ModalWindow = props => {
  const [name, email] = props.formInpt;
  const { 
      clicked,
      base, 
      dopi, 
      id, 
      dopiClick,
      basePrice,
      fullPrice,
      attestClick,
      attestat,
      rtn
  } = props.st;

  let basicName = base.filter((item, index) => !(index % 2))
                       .map(i => `<p class="base_dop_item">'${i}'</p><hr>`);

  let dopName = dopi.map(i => i[0])
                     .filter((item, index) => dopiClick[index] && !(index % 2))
                     .map(i => `<p class="base_dop_item">'${i}'</p><hr>`);

  const dopPrice = dopiClick.reduce((cur, acc) => cur + acc) ? 
                    dopi.map(i => i[1])
                        .filter((item, index) => dopiClick[index] && !(index % 2))
                        .reduce((cur, acc) => cur + acc) : [];

  const attestPrice = attestClick ? attestat : 0;

  const handleSubmit = event => {
                        event.preventDefault();
                        axios.post('http://test.argus-eko.ru/kp_mail.php', { 
                                                                        name: name,
                                                                        mail: email,
                                                                        dopiPrice: dopPrice,
                                                                        id: id,
                                                                        atst: attestPrice,
                                                                        full: fullPrice 
                                                                      })
                             .then(res => {
                                console.log(res);
                                console.log(res.data);
                        })
                      }

return (
        <Modal show={props.offer && clicked} onHide={props.funcII} animation={false} centered>
                      <Modal.Body>
                        <form action="test.php" id="submit_form_offer" method="post" name="formoffer" noValidate="" target="_blank">
                          <div>
                            {/* <input type='HIDDEN' defaultValue={id} name="lab_kb"></input>
                            <input type='HIDDEN' defaultValue={basePrice} name="basic_price"></input>
                            <input type='HIDDEN' defaultValue={basic_name} name="basic_name"></input>
                            <input type='HIDDEN' defaultValue={dop_name} name="dop_name"></input>
                            <input type='HIDDEN' defaultValue={dop_price} name="dop_price"></input>
                            <input type='HIDDEN' defaultValue={fullPrice} name="price_all"></input>
                            <input type='HIDDEN' defaultValue={attestClick ? attestat : 0} name="attest"></input>
                            <input type='HIDDEN' defaultValue={rtn} name="rtn"></input> */}
                            {/* <input name="lab_kb" value={json[0]} placeholder={json[0]}></input> */}
                            <input onChange={e => props.funcVI(e)} defaultValue={name} className="cli_info cli_full_nme" maxLength="45" name="userName" placeholder="ФИО" type="text" />
                            <div className="inpt_mail_cvr">
                              <input onChange={e => props.funcVI(e)} defaultValue={email} className="cli_info cli_email" name="userMail" placeholder="Почт@" type="email" /> 
                              <span className="tooltips">example@mail.ru</span>
                            </div>
                          </div>
                        </form>
                        <div className="warning">
                          <span>Заполните форму!</span>
                        </div>
                        {dopName}
                      </Modal.Body>
                      <Modal.Footer className="clr_I">
                        <button onClick={handleSubmit} className="btn btn-default">
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
    )
}

export default ModalWindow;