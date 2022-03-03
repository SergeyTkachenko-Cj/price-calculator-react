import React, {Fragment} from "react";

const Base = props => {
    const {id, base, basePrice} = props.prps.list;
    const arrBase = [];

    // console.log(props.prps.list);

    const codec = attr => attr
                            .replace(/&shy;/g, "\u00AD")
                            .replace(/&nbsp;/g, "\u00A0")
                            .replace(/&hyphen;/g, "\u002D");

    for (let x = 0; x < base.length; x += 2) {
        arrBase.push(
            <tr key={x}>
                <td className="txt_resp dop_txt table_lg_screen">{codec(base[x])}
                </td>
                <td className="txt_resp dop_txt table_sm_screen">{codec(base[x + 1])}
                </td>
            </tr>
        )
    }

    return(
        <Fragment>
            <div className="drop_head_id">{id}</div><br/>
            <div className="drop_head">
                <span>Базовые виды испытаний.<br/>
                Стоимость: {basePrice}&nbsp;р.</span>
            </div>
            <table className="table drop_tbl">
                <tbody>
                    {arrBase}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Base;