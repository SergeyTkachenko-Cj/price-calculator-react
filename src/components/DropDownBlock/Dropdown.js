import React from "react"
import Base from './Base';
import AttRtn from '../AttRtn/AttRtn';
import Dopi from './Dopi';
import Itogo from './Itogo';

const Dropdown = props => {
        const {clicked} = props.list;
        
        return (
            <div className={clicked ? "container" : "show-off"}>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 text-center">
                        <div className={clicked ? "card_cours fade-in" : ""}>
                            <AttRtn prps={props} />
                            <Base prps={props} />
                            <Dopi prps={props} />
                            <Itogo prps={props} />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Dropdown;