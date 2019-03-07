import React from "react";

const Rtn = props => {
    const {rtn} = props.prps.list;
    
    return (
        <tr className="rtn">
            <td className="dop_txt" colSpan="3">
                <span className="table_lg_screen">
                    Платёж в РТН (по&nbsp;отдельному&nbsp;договору) 
                    <span className="extra_txt"> ({rtn}&nbsp;р.)</span>
                </span>
                <span className="table_sm_screen">
                    Пла&shy;тёж в РТН (по&nbsp;от&shy;дель&shy;но&shy;му&nbsp;до&shy;го&shy;во&shy;ру) 
                    <span className="extra_txt"> ({rtn}&nbsp;р.)</span>
                </span>
            </td>
        </tr>
    )
}

export default Rtn;