import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import './index.css';
import Header from './components/Header';
import DropDownBlock from './components/DropDownBlock';

function App() {
  return (
    <div className="container cvr">
      <Header />
      <DropDownBlock />
    </div>
  );
}

export default App;
