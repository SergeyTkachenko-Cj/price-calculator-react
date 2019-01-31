import React, {Fragment} from "react";

const Itogo = props => {
    const {fullPrice} = props.prps.list;

    return(
        <Fragment>
            <div className="drop_head" id="lab1_price">
                <span>Итоговая стоимость:</span>
            </div>
            <div className="h_sum">
                <span className="dop_sum">{fullPrice} p</span>
            </div>
            <button className="btn btn-default action_btn js-count_btn long_name" data-dop-table="#js-dop_tbl_I">
                <span>Коммерческое предложение</span>
            </button> 
            <button className="btn btn-default action_btn js-count_btn short_name" data-dop-table="#js-dop_tbl_I">
                <span>Ком-ое предложение</span>
            </button>
        </Fragment>
    )
}

export default Itogo;