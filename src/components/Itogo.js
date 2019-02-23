import React, {Fragment} from "react";

const Itogo = props => {
    const {fullPrice} = props.prps.list;
    const {funcII} = props.prps;

    return(
        <Fragment>
            <div className="drop_head">
                <span>Итоговая стоимость:</span>
            </div>
            <div className="h_sum">
                <span className="dop_sum">{fullPrice} p</span>
            </div>
            <button onClick={() => funcII(props.prps.index)} className="btn btn-default action_btn js-count_btn long_name">
                <span>Коммерческое предложение</span>
            </button> 
            <button onClick={() => funcII(props.prps.index)} className="btn btn-default action_btn js-count_btn short_name">
                <span>Ком-ое предложение</span>
            </button>
        </Fragment>
    )
}

export default Itogo;