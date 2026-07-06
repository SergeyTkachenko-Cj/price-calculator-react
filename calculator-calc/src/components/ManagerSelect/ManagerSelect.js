import React from "react";
import ManagerButton from './ManagerButton';
import Maksim from '../../img/Maksim.jpeg';
import Oksana from '../../img/Oksana_Larchenkova.png';
import Liliya from '../../img/Liliya 1.jpeg';
import Dmitriy from '../../img/Dmitriy_Shnayder.png';
import Daria from '../../img/Daria_Pavlova.png';

const ManagerSelect = props => {
    const managers = [
                    {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: '132@argus-eko.ru'},
                    {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: '133@argus-eko.ru'},
                    {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: '130@argus-eko.ru'}, 
                    {name: 'ШНАЙДЕР ДМИТРИЙ', pic: Dmitriy, email: '131@argus-eko.ru'}, 
                    {name: 'ОКСАНА ЛАРЧЕНКОВА', pic: Oksana, email: '122@cdpo-argus.ru'}
                        // {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: 'tka4inni@gmail.com'},
                        // {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: 'tka4inni@gmail.com'},
                        // {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: 'tka4inni@gmail.com'}, 
                        // {name: 'ШНАЙДЕР ДМИТРИЙ', pic: Dmitriy, email: 'tka4inni@gmail.com'}, 
                        // {name: 'ОКСАНА ЛАРЧЕНКОВА', pic: Oksana, email: 'tka4inni@gmail.com'}
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