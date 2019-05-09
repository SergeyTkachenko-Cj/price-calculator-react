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

        newList.forEach((i, index) => {
                const exceptions = excepIndex => {        // exception buttons
                    if (excepIndex && i.id === id) {      // (cannot be pushed simulteniously)
                        i.fullPrice -= i.dopiClick[excepIndex] ? i.dopi[excepIndex][1] : 0; 
                        i.dopiClick[excepIndex] = false;
                    } 
                }

                const specialItem = special => {
                    const item = [
                        'Проверка цепи фаза&hyphen;нуль в электро&shy;установках до&nbsp;1&nbsp;кВ с системой&nbsp;TN',
                        'Проверка срабатывания защиты при системе питания с заземлённой нейтралью',
                        'Про&shy;вер&shy;ка сра&shy;ба&shy;ты&shy;ва&shy;ния за&shy;щи&shy;ты при сис&shy;те&shy;ме пи&shy;та&shy;ния с за&shy;зем&shy;лён&shy;ной ней&shy;тра&shy;лью'
                    ];

                    if (typeof special === 'string' && i.dopiClick[step] && i.id === id) {
                        i.base.splice(i.base.indexOf(item[0]) + 2, 2);
                    }
                    else if (typeof special === 'string' && !i.dopiClick[step] && i.id === id) {
                        i.base.splice(i.base.indexOf(item[0]) + 2, 0, item[1], item[2]);
                    }
                }

            if (step === undefined || i.dopi[step] === undefined) {
                i.clicked = i.id === id ? !i.clicked : false;
            }
            else { 
                i.dopiClick[step] = i.id === id ? !i.dopiClick[step] : i.dopiClick[step];
                exceptions(i.dopi[step][2]); 
                specialItem(i.dopi[step][2]); 
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