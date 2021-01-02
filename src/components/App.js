import React from 'react';
import './App.css';
import CreditCardFront from './CreditCardFront';
import CreditCardBack from './CreditCardBack';
import Form from './Form';

const App = () => {
  return (
    <div className="App">
      <CreditCardFront/>
      <CreditCardBack/>
      <Form/>
    </div>
  );
}

export default App;
