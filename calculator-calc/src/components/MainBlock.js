// MainBlock.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import DropDownBlock from './DropDownBlock/DropDownBlock'; // Ensure the path is correct
import Warn from './Warn';
import ManagerSelect from './ManagerSelect/ManagerSelect';
import LocationSelector from './LocationSelector';

const MainBlock = () => {
    const navigate = useNavigate();
    const [manager, setManager] = useState(false);
    const [managerEmail, setManagerEmail] = useState('');
    const [location, setLocation] = useState(null);

    const handleClick = (email) => {
        setManager(true);
        setManagerEmail(email);
    };

    const handleSelectLocation = (selectedLocation) => {
        setLocation(selectedLocation);
    };

    const resetAndNavigateToLocationSelector = () => {
        setManager(false);
        setManagerEmail('');
        setLocation(null);
        navigate('/');
    };

    return (
        <div className="container cvr">
            <div className="logo" onClick={resetAndNavigateToLocationSelector}></div>
            {!location ? (
                <>
                <LocationSelector onSelectLocation={handleSelectLocation} />
                <Warn />
                </>
            ) : (
                <>
                    <Header prps={manager} />
                    <ManagerSelect prps={manager} func={handleClick} />
                    <DropDownBlock prps={{ manager, managerEmail, location }} />
                    <Warn />
                </>
            )}
        </div>
    );
};

export default MainBlock;