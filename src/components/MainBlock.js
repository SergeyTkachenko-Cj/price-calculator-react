import React, {Component} from 'react';
import Header from './Header';
import DropDownBlock from './DropDownBlock/DropDownBlock';
import Warn from './Warn';
import ManagerSelect from './ManagerSelect/ManagerSelect';

class MainBlock extends Component {
    state = {
        manager: false,
        managerEmail: ''
    }

    handleClick = email => this.setState({
                                        manager: true, 
                                        managerEmail: email
                                        });

    render() { 
        return (
            <div className="container cvr">
            <div className="logo"></div>
            <Header prps={this.state.manager} />
            <ManagerSelect prps={this.state.manager} func={this.handleClick} />
            <DropDownBlock prps={this.state} />
            <Warn />
            </div>
        )
    }
}

export default MainBlock;