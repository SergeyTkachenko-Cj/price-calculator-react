import React, {Fragment} from "react";

const Dopi = props => {
    const {dopi, id, dopiClick} = props.prps.list;
    const arrDopi = [];

    const codec = attr => attr
                            .replace(/&shy;/g, "\u00AD")
                            .replace(/&nbsp;/g, "\u00A0")
                            .replace(/&hyphen;/g, "\u002D");

    const specialItem = (special, click) => typeof special === 'string' && click;

    for (let x = 0; x < dopi.length; x += 2) {
        arrDopi.push(
            <tr className={dopiClick[x] ? "dop dop-bg-color" : "dop"} key={x}>
                <td className="dop_txt table_lg_screen">
                    {codec(dopi[x][0])}
                    <span className={specialItem(dopi[x][2], dopiClick[x]) ? "show-off" : "extra_txt show-on-inline"}> ({dopi[x][1]} p)</span>
                    <div className={specialItem(dopi[x][2], dopiClick[x]) ? "special show-on" : "show-off"}>
                        {specialItem(dopi[x][2], dopiClick[x]) ? codec(dopi[x][2]) : null}
                        <span className="extra_txt"> ({dopi[x][1]} p)</span>
                    </div>
                </td>
                <td className="dop_txt table_sm_screen">
                    {codec(dopi[x + 1][0])}
                    <span className={specialItem(dopi[x + 1][2], dopiClick[x]) ? "show-off" : "extra_txt show-on-inline"}> ({dopi[x + 1][1]} p)</span>
                    <div className={specialItem(dopi[x + 1][2], dopiClick[x]) ? "special show-on" : "show-off"}>
                        {specialItem(dopi[x + 1][2], dopiClick[x]) ? codec(dopi[x + 1][2]) : null}
                        <span className="extra_txt"> ({dopi[x + 1][1]} p)</span>
                    </div>
                <br/>
                <br/>
                    <button
                        onClick={() => props.prps.func(id, x)}     
                        className="btn btn-default add_remove">
                        <span>{dopiClick[x] ? 'Убрать' : 'Добавить'}</span>
                    </button>
                </td>
                <td className="text-center lg_screen_btn">
                    <button 
                        onClick={() => props.prps.func(id, x)}                
                        className="btn btn-default add_remove">
                        <span>{dopiClick[x] ? 'Убрать' : 'Добавить'}</span>
                    </button>
                </td>
            </tr>
        )
    }

    return(
        <Fragment>
            <div className="drop_head">
                <span>Дополнительные виды испытаний.</span>
            </div>
            <table className="table drop_tbl">
                <tbody id="js-dop_tbl_I">
                    {arrDopi}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Dopi;