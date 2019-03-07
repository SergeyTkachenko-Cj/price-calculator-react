import React from "react";

const Att = props => {
    const {attestat, attestClick, id} = props.prps.list;

    return (
        <tr className={attestClick ? "dop-bg-color" : ""}>
            <td className="dop_txt table_lg_screen">
                Аттестация сотруднков (3&nbsp;чел) 
                <span className="extra_txt"> ({attestat}&nbsp;р.)</span>
            </td>
            <td className="text-center lg_screen_btn">
                <button 
                    onClick={() => props.prps.func(id, 'a')} 
                    className="btn btn-default add_remove">
                    <span>{attestClick ? 'Убрать' : 'Добавить'}</span>
                </button>
            </td>
            <td className="dop_txt table_sm_screen">
                Ат&shy;тес&shy;та&shy;ция со&shy;труд&shy;ни&shy;ков (3&nbsp;чел) 
                <span className="extra_txt"> ({attestat}&nbsp;р.)</span>
            <br/>
            <br/>
                <button 
                    onClick={() => props.prps.func(id, 'a')} 
                    className="btn btn-default add_remove">
                    <span>{attestClick ? 'Убрать' : 'Добавить'}</span>
                </button>
             </td>
        </tr>
    )
}

export default Att;