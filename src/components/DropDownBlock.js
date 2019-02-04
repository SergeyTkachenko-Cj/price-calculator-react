import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List.js';
import Dropdown from './Dropdown';
import ButtonSelect from './ButtonSelect';
import ModalWindow from './ModalWindow';

class DropDownBlock extends Component {
    state = {
        services: List
    }

    handleClick = (id, step) => {
        const newList = [...this.state.services];
        const pricing = (clckd, price, fullPrice) => clckd ? fullPrice + price : fullPrice - price;

        newList.forEach(i => {
            if (step === undefined) {
                i.clicked = i.id === id ? !i.clicked : false;
            }
            else {
                if (step === 'a') {
                    i.attestClick = i.id === id ? !i.attestClick : i.attestClick;
                    i.fullPrice = i.id === id ? pricing(i.attestClick, i.attestat, i.fullPrice) : i.fullPrice;
                } 
                else {
                    i.dopiClick[step] = i.id === id ? !i.dopiClick[step] : i.dopiClick[step];
                    i.fullPrice = i.id === id ? pricing(i.dopiClick[step], i.dopi[step][1], i.fullPrice) : i.fullPrice;
                }
            }
        })

        this.setState({services: newList});
    }

    render() {
        const f = Param => {
            return this.state.services.map((item, index) => 
                <Param 
                    key={index} 
                    func={this.handleClick}
                    list={item} 
                />
        )}

        return (
            <Fragment>
                <div className="btns-cvr">
                    {f(ButtonSelect)}
                </div>
                {f(Dropdown)}
                <ModalWindow />
            </Fragment>
        )
    }
}

export default DropDownBlock;