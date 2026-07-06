import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import './index.css';
import MainBlock from './components/MainBlock';

const App = () => {
    return (
        <Router>
            <Routes>
            	<Route path="/" element={<MainBlock />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
