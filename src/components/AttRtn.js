import React,{Fragment} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const AttRtn = props => {
    const {attestat, rtn} = props.prps.list;

    return(
        <table className="table attest_rtn">
        <tbody>
            <tr className="dop att">
                <td className="text-center txt_resp dop_txt table_lg_screen">
                    Аттестация сотруднков (3&nbsp;чел) 
                    <span className="extra_txt"> ({attestat}&nbsp;р.)</span>
                </td>
                <td className="text-center txt_resp dop_txt table_sm_screen">
                    Ат&shy;тес&shy;та&shy;ция со&shy;труд&shy;ни&shy;ков (3&nbsp;чел) 
                    <span className="extra_txt"> ({attestat}&nbsp;р.)</span>
                <br/>
                <br/>
                    <button className="btn btn-default add_remove">
                        <span>Добавить</span>
                    </button>
                </td>
                <td className="text-center lg_screen_btn">
                    <button className="btn btn-default add_remove">
                        <span>Добавить</span>
                    </button>
                </td>
            </tr>
            <tr className="dop rtn">
                <td className="text-center txt_resp dop_txt" colSpan="3">
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
        </tbody>
        </table>
    )
}

export default AttRtn;