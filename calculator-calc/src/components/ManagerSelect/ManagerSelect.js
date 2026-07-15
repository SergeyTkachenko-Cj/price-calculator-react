import React from "react";
import ManagerButton from './ManagerButton';
import Maksim from '../../img/Maksim.jpeg';
import Oksana from '../../img/Oksana_Larchenkova.png';
import Liliya from '../../img/Liliya 1.jpeg';
import Dmitriy from '../../img/Dmitriy_Shnayder.png';
import Daria from '../../img/Daria_Pavlova.png';
import Tatiana from '../../img/Tatiana.png';
import Eduard from '../../img/Eduard.png';
import Sergey from '../../img/Sergey.jpeg';

const ManagerSelect = props => {
    const managers = [
                    {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: '132@argus-eko.ru'},
                    {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: '133@argus-eko.ru'},
                    {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: '130@argus-eko.ru'}, 
                    {name: 'ШНАЙДЕР ДМИТРИЙ', pic: Dmitriy, email: '131@argus-eko.ru'}, 
                    {name: 'ЛАРЧЕНКОВА ОКСАНА', pic: Oksana, email: '122@cdpo-argus.ru'},
                    {name: 'ВАСИЛЬЕВА ТАТЬЯНА', pic: Tatiana, email: 'argus-eko-127@mail.ru'},
                    {name: 'ТАЛЕРОВ ЭДУАРД', pic: Eduard, email: 'argus-eko-117@mail.ru'},
                    {name: 'СМИРНОВ СЕРГЕЙ', pic: Sergey, email: 'argus-eko-135@mail.ru'}
                        // {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: 'tka4inni@gmail.com'},
                        // {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: 'tka4inni@gmail.com'},
                        // {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: 'tka4inni@gmail.com'}, 
                        // {name: 'ШНАЙДЕР ДМИТРИЙ', pic: Dmitriy, email: 'tka4inni@gmail.com'}, 
                        // {name: 'ЛАРЧЕНКОВА ОКСАНА', pic: Oksana, email: 'tka4inni@gmail.com'},
                        // {name: 'ВАСИЛЬЕВА ТАТЬЯНА', pic: Tatiana, email: 'argus-eko-127@mail.ru'},
                        // {name: 'ТАЛЕРОВ ЭДУАРД', pic: Eduard, email: 'argus-eko-117@mail.ru'},
                        // {name: 'СМИРНОВ СЕРГЕЙ', pic: Sergey, email: 'argus-eko-135@mail.ru'}
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