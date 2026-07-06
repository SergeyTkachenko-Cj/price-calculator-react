import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
    
    return (
        <div className="container-fluid cours_slogan">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <h2 className="h2_style marg_h2 text-center courses_head">
                  {props.prps ? <div>
                                  <div>Добавить виды испытаний&nbsp;к</div>
                                  <br id="brake_sm"/>
                                  <div> существующему списку:</div>
                                </div> 
                                : 'Выберите Вашего менеджера:'}
                </h2>
              </div>
            </div>
        </div>
    )
}

export default Header;