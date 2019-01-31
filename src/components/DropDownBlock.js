import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List.js';
import Dropdown from './Dropdown';

class DropDownBlock extends Component {
    state = {
        services: List
    }

    handleClick = event => {
        const newArr = [...this.state.services];

        newArr.forEach(i => {
            i.collapse = i.id === event.target.id ? !i.collapse : false;
            i.clicked = i.id === event.target.id ? !i.clicked : false;
        })

        this.setState({services: newArr});
    }

    render() {
        const servicesListArr = this.state.services.map((item, index) => 
                            <Dropdown 
                                key={index} 
                                func={this.handleClick}
                                list={item}
                            />)

        const buttonsArr = this.state.services.map((item, index) => 
                            <button 
                                className={item.clicked ? "btn-clicked cours_btn" : "cours_btn"} 
                                key={index}  
                                onClick={item.clicked ? () => false : e => this.handleClick(e)} 
                                id={item.id}
                            >{item.id}
                            </button>
                            )

        return (
            <Fragment>
                <div className="btns-cvr">
                    {buttonsArr}
                </div>
                    {servicesListArr}
            </Fragment>
        )
    }
}

export default DropDownBlock;