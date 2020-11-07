import React from 'react';
import './App.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Input from '../src/components/Input';

function App() {
  return (
  <div>
    <Header />
    <Input id="password-box" type="text" />
    <Input id="simple-button" type="button" className="btn btn-light" value="Simple password" onClick="generator" />
    <Input id="strong-button" type="button" className="btn btn-light" value="Strong password" onClick="generator" />
    <Footer /> 
  </div>);
}
export default App;
