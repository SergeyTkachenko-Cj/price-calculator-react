import React, {Component} from "react";
import List from '../List.js';
import Dropdown from './Dropdown';
import ButtonSelect from './ButtonSelect';
import ModalWindow from '../ModalWindow/ModalWindow';

class DropDownBlock extends Component {
    state = {
        services: List,
        comOffer: false,
        index: 0
    }

    handleClick = (id, step) => {
        const newList = [...this.state.services];
        const pricing = (clckd, price, fullPrice) => clckd ? fullPrice + price : fullPrice - price;

        newList.forEach(i => {
            if (step === undefined) {
                i.clicked = i.id === id ? !i.clicked : false;
            }
            else { 
                i.dopiClick[step] = i.id === id ? !i.dopiClick[step] : i.dopiClick[step];
                i.fullPrice = i.id === id ? pricing(i.dopiClick[step], i.dopi[step][1], i.fullPrice) : i.fullPrice;
            }
        })

        this.setState({services: newList});
    }

    handleText = event => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    }

    handleKp = ind => {
        ind === undefined ? this.setState({comOffer: !this.state.comOffer}) : 
        this.setState({
            comOffer: !this.state.comOffer, 
            index: ind
        });
    }

    handleSuccess = param => {
        this.setState({success: param});
    }

    render() {
        const par = Param => {
            return this.state.services.map((item, index) => 
                <Param 
                    key={index}
                    index={index} 
                    func={this.handleClick}
                    funcII={this.handleKp}
                    list={item} 
                />
        )}

        return (
            <div className={this.props.prps.manager ? 
                            'show-on dropDownCvr' : 
                            'show-off'
                            }>
                <div className="btns-cvr">
                    {par(ButtonSelect)}
                </div>
                {par(Dropdown)}
                <ModalWindow 
                    prps={this.state.services} 
                    offer={this.state.comOffer}
                    indx={this.state.index}
                    kp={this.handleKp}
                    mngr={this.props.prps.managerEmail} 
                />
            </div>
        )
    }
}

export default DropDownBlock;