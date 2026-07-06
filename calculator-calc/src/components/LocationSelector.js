import React from 'react';

const LocationSelector = ({ onSelectLocation }) => {
    const handleSelectLocation = (location) => {
        if (typeof onSelectLocation === 'function') {
            onSelectLocation(location);
        }
    };

    return (
    	<div className="container-fluid cours_slogan">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
            	<h2 className="h2_style marg_h2 text-center courses_head">Выберите локацию</h2>
            		<button className="mngr-btn btn btn-outline-success" onClick={() => handleSelectLocation('moscow')}>Москва</button>
                    <button className="mngr-btn btn btn-outline-success" onClick={() => handleSelectLocation('mo')}>Московская Область</button>
            		<button className="mngr-btn btn btn-outline-success" onClick={() => handleSelectLocation('regions')}>Регионы</button>
              </div>
            </div>
        </div>
    );
};

export default LocationSelector;