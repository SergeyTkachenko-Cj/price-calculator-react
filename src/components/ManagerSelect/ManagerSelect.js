import React from "react";
import ManagerButton from './ManagerButton';
import Maksim from '../../img/Maksim.jpeg';
import Irina from '../../img/Irina.jpeg';
import Lubov from '../../img/Lubov.jpeg';
import Leonid from '../../img/Leonid.jpeg';
import Liliya from '../../img/Liliya.jpeg';

const ManagerSelect = props => {
    const managers = [
                       {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: '117@argus-eko.ru'}, 
                       {name: 'ЕРШОВА ИРИНА', pic: Irina, email: '131@argus-eko.ru'}, 
                       {name: 'ШАНГИНА ЛЮБОВЬ', pic: Lubov, email: '130@argus-eko.ru'}, 
                       {name: 'МАМОТЛИВЫЙ ЛЕОНИД', pic: Leonid, email: '126@argus-eko.ru'}, 
                       {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: '132@argus-eko.ru'}
                      ];

    const mngrBtns = managers.map((item, index) => 
                                <ManagerButton 
                                    key={index}
                                    className="mngr-btn btn btn-outline-success"
                                    func={props.func}
                                    prps={item}
                                />);

    return (
        <div className={props.prps ? "show-off" : 
                                  "col-xs-10 col-xs-offset-1 text-center manager-btn-block"}>
            {mngrBtns}
        </div>
    )
}

export default ManagerSelect;