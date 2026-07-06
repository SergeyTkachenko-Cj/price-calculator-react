// ModalWindow.js
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'; 
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

class ModalWindow extends Component {
    state = {
        name: '',
        nameValid: true,
        email: '',
        emailValid: true,
        success: 0,
        loading: false
    }

    handleAxios = (php, obj) => {
        return axios.post(php, obj); 
    }

    handleSuccess = param => {
        this.setState({ success: param });
    }

    handleClose = () => {
        this.setState({
            success: 0,
            loading: false,
            nameValid: true,
            emailValid: true
        });
        this.props.kp();
    }

    handleText = event => {
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleValidation = () => {
        // Simplified email validation regex to satisfy ESLint and still be robust
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.setState({ nameValid: !!this.state.name, emailValid: re.test(this.state.email) });
        return !!this.state.name && re.test(this.state.email);
    }

    handleAnim = inpt => {
        this.setState({ [inpt]: true });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, email } = this.state;
        const { base, dopi, id, dopiClick, basePrice, fullPrice } = this.props.prps[this.props.indx] || {};
        
        if (!base || !dopi || !basePrice || !fullPrice) {
            console.error("Service data is missing or invalid");
            return;
        }

        const dataBase = b => b.filter((item, index) => !(index % 2));
        const dataDopi = d => d.map(i => typeof i[2] === 'string' ? 
                                      `${i[0]} + ${i[2]} - ${i[1]}&nbsp;р` : 
                                      `${i[0]} - ${i[1]}&nbsp;р`)                 // for pdf
                           .filter((item, index) => dopiClick[index] && !(index % 2));                           
        const basePdf = dataBase(base).map(i => `<p class="base_dop_item">${i}</p><hr>`);
        const baseDocx = dataBase(base).join('<br />');
        const dopiPdf = dataDopi(dopi).map(i => `<p class="base_dop_item">${i}</p><hr>`);
        const dopiDocx = dataDopi(dopi).join('<br />');
        const dopPrice = dopiPdf.length ? 
                          dopi.map(i => i[1])
                              .filter((item, index) => dopiClick[index] && !(index % 2))
                              .reduce((cur, acc) => cur + acc, 0) : 0;
        const dopHeadPdf = dopiPdf.length ? '<div class="serv_list_name">Дополнительные виды испытаний:</div>' : '';
        const dopHeadDocx = 'Дополнительные виды испытаний:';
        const dopNoItemsDocx = dopiPdf.length ? '' : 'ничего не выбрано';

        // Pdf
        const objClient = { name: name, mail: email, lab: id, base: basePdf, basePrice: basePrice, dopi: dopiPdf, dopiPrice: dopPrice, dopiHead: dopHeadPdf, full: fullPrice };
        // Docx
        const objManager = { name: name, mail: email, lab: id, base: baseDocx, basePrice: basePrice, dopi: dopiDocx, dopiPrice: dopPrice, dopiHead: dopHeadDocx, dopNoItems: dopNoItemsDocx, full: fullPrice, manager: this.props.mngr };

        if (this.handleValidation()) {
            this.setState({ loading: !this.state.loading });
            this.handleAxios('https://calculator.argus.group/test.php', objClient)
                .then(res => {
                    if (res.data) {
                        this.handleSuccess(1);
                        this.setState({ loading: false });
                        this.handleAxios('https://calculator.argus.group/test2.php', objManager)
                            .then(() => {
                                // Handle success for manager email
                            })
                            .catch(err => {
                                console.error("Error sending manager email:", err);
                                this.handleSuccess(-1);
                                this.setState({ loading: false });
                            });
                    } else { 
                        this.handleSuccess(-1);
                        this.setState({ loading: false }); 
                    }
                })
                .catch(err => {
                    console.error("Error sending client email:", err);
                    this.handleSuccess(-1);
                    this.setState({ loading: false });
                });
        }
    }

    render() {
        const { prps, offer, indx } = this.props;
        const service = prps[indx];

        if (!service) {
            return null; // Return null if service is undefined
        }

        return (
            <Modal show={offer && service.clicked} 
                   onHide={this.state.loading ? () => null : this.handleClose} 
                   animation={false} 
                   className={offer ? "modal-on" : ""}
                   centered>
                <ModalBody 
                  state={this.state} 
                  txt={this.handleText} 
                  anim={this.handleAnim} 
                />
                <ModalFooter 
                  state={this.state}
                  submit={this.handleSubmit} 
                  close={this.handleClose} 
                />
            </Modal>
        );
    }
}

export default ModalWindow;