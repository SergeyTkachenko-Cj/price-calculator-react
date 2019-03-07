import React from "react";
import Att from './Att';
import Rtn from './Rtn';

const AttRtn = props => {
    
    return (
        <table className="table attest_rtn">
            <tbody>
                <Att prps={props.prps} />
                <Rtn prps={props.prps} />
            </tbody>
        </table>
    )
}

export default AttRtn;