import React, {Component, Fragment} from "react";
import List from './List.js';
import Dropdown from './Dropdown';
import ButtonSelect from './ButtonSelect';
import ModalWindow from './ModalWindow';

class DropDownBlock extends Component {
    state = {
        services: List,
        comOffer: false,
        json: ['','','','','','',''],
        userName: '',
        userMail: ''
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

    handleText = event => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    }

    handleKp = () => {
        const newList = this.state.comOffer;
        this.setState({comOffer: !newList});
    }

    // handleJSON = () => {
    //     const arr = [...this.state.services].filter(i => i.clicked)[0];
    //     const lab_kb = arr.id;
    //     const attest = arr.attestClick ? arr.attestat : 0;
    //     const rtn = arr.rtn;
    //     let basic_name = arr.base.filter((item, index) => !(index % 2)).map(i => `<p class="base_dop_item">'${i}'</p><hr>`);
    //     const basic_price = arr.basePrice;
    //     let dop_name = arr.dopi.map(i => i[0])
    //                          .filter((item, index) => arr.dopiClick[index] && !(index % 2))
    //                          .map(i => `<p class="base_dop_item">'${i}'</p><hr>`);
    //     const dop_price = arr.dopiClick.reduce((cur, acc) => cur + acc) ? 
    //                       arr.dopi.map(i => i[1])
    //                               .filter((item, index) => arr.dopiClick[index] && !(index % 2))
    //                               .reduce((cur, acc) => cur + acc) : [];
    //     const price_all = arr.fullPrice;
    //     basic_name = JSON.stringify(basic_name);
    //     dop_name = JSON.stringify(dop_name);

    //     this.setState({json: [lab_kb, 
    //                           basic_price, 
    //                           basic_name, 
    //                           dop_name, 
    //                           dop_price, 
    //                           price_all, 
    //                           attest, 
    //                           rtn]
    //     });
    // }

    render() {
        const f = Param => {
            return this.state.services.map((item, index) => 
                <Param 
                    key={index} 
                    func={this.handleClick}
                    funcII={this.handleKp}
                    list={item} 
                />
        )}

        const bambi = this.state.services.map((item, index) => 
            <ModalWindow 
                key={index} 
                st={item} 
                offer={this.state.comOffer}
                funcII={this.handleKp} 
                // funcIII={this.handleJSON} 
                funcVI={this.handleText}
                formInpt={[this.state.userName, this.state.userMail]}
            />
        )

        return (
            <Fragment>
                <div className="btns-cvr">
                    {f(ButtonSelect)}
                </div>
                {f(Dropdown)}
                {bambi}
            </Fragment>
        )
    }
}

export default DropDownBlock;