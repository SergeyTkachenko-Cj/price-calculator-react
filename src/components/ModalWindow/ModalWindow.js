import React, {Component} from 'react';
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
    this.setState({success: param});
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
    this.setState({[event.target.name]: event.target.value});
  }

  handleValidation = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({nameValid: this.state.name, emailValid: re.test(this.state.email)});
    return this.state.name && re.test(this.state.email)
  }

  handleAnim = inpt => {
    this.setState({[inpt]: true});
  }

  handleSubmit = event => {
    event.preventDefault();

    const {name, email} = this.state;
    const {base, dopi, id, dopiClick, basePrice, fullPrice, attestClick, attestat, rtn} 
          = this.props.prps[this.props.indx];

    let baseName = base.filter((item, index) => !(index % 2))
                        .map(i => `<p class="base_dop_item">${i}</p><hr>`);

    let dopName = dopi.map(i => i[0])
                      .filter((item, index) => dopiClick[index] && !(index % 2))
                      .map(i => `<p class="base_dop_item">${i}</p><hr>`);

    const dopPrice = dopName.length ? 
                      dopi.map(i => i[1])
                          .filter((item, index) => dopiClick[index] && !(index % 2))
                          .reduce((cur, acc) => cur + acc) : 0;

    const dopHead = dopName.length ? '<div class="serv_list_name">Дополнительные виды испытаний:</div>' : '';

    const attestPrice = attestClick ? attestat : 0;
    const obj = {name: name, mail: email, lab: id, base: baseName, basePrice: basePrice, dopi: dopName, dopiPrice: dopPrice, dopiHead: dopHead, atst: attestPrice, rtn: rtn, full: fullPrice };

    if (this.handleValidation()) {
      this.setState({loading: !this.state.loading});

      // setTimeout(() => {
      //   this.handleSuccess(1);
      //   this.setState({loading: false}); 
      // }, 4000); 
      
      this.handleAxios('http://test.argus-eko.ru/test.php', obj)
        .then(res => {
              if (res.data) {
                this.handleSuccess(1);
                this.setState({loading: false});
                this.handleAxios('http://test.argus-eko.ru/kp_mail.php', obj)
              }
              else { 
                this.handleSuccess(-1);
                this.setState({loading: false}); 
              };
            });
    }
  }

  render() {
    const {clicked} = this.props.prps[this.props.indx];

    return (
      <Modal show={this.props.offer && clicked} 
             onHide={this.state.loading ? () => null : this.handleClose} 
             animation={false} 
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
    )
  }
}

export default ModalWindow;