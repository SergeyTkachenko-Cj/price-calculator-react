import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import './index.css';
import Header from './components/Header';
import DropDownBlock from './components/DropDownBlock/DropDownBlock';
import Warn from './components/Warn';

function App() {
  return (
    <div className="container cvr">
      <div className="logo"></div>
      <Header />
      <DropDownBlock />
      <Warn />
    </div>
  );
}

export default App;
