import React from "react";
import ManagerButton from './ManagerButton';
import Maksim from '../../img/Maksim.jpeg';
import Oksana from '../../img/Oksana_Larchenkova.png';
import Liliya from '../../img/Liliya 1.jpeg';
import Daria from '../../img/Daria_Pavlova.png';
import Margarita from '../../img/Margarita.png';
import Lida from '../../img/Lida.png';
import Leonid from '../../img/Leonid.jpeg';

const ManagerSelect = props => {
    const managers = [
                    {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: '132@argus-eko.ru'},
                    {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: '133@argus-eko.ru'},
                    {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: '130@argus-eko.ru'}, 
                    {name: 'ЛАРЧЕНКОВА ОКСАНА', pic: Oksana, email: '122@cdpo-argus.ru'},
                    {name: 'ФЕДИНА МАРГАРИТА', pic: Margarita, email: '120@argus-eko.ru'},
                    {name: 'МЕДВЕДЕВА ЛИДИЯ', pic: Lida, email: '119@argus-eko.ru'},
                    {name: 'МАМОТЛИВЫЙ ЛЕОНИД', pic: Leonid, email: '139@argus-eko.ru'}
                        // {name: 'ДОБРОВОЛЬСКАЯ ЛИЛИЯ', pic: Liliya, email: 'tka4inni@gmail.com'},
                        // {name: 'ПАВЛОВА ДАРЬЯ', pic: Daria, email: 'tka4inni@gmail.com'},
                        // {name: 'СОРОКИН МАКСИМ', pic: Maksim, email: 'tka4inni@gmail.com'}, 
                        // {name: 'ЛАРЧЕНКОВА ОКСАНА', pic: Oksana, email: 'tka4inni@gmail.com'},
                        // {name: 'ФЕДИНА МАРГАРИТА', pic: Margarita, email: 'tka4inni@gmail.com'},
                        // {name: 'МЕДВЕДЕВА ЛИДИЯ', pic: Lida, email: 'tka4inni@gmail.com},
                        // {name: 'МАМОТЛИВЫЙ ЛЕОНИД', pic: Leonid, email: 'tka4inni@gmail.com'}
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