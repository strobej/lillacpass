import React, {useState} from 'react';
import './App.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Input from '../src/components/Input';

function App() {
  const [password, getPassword] = useState("...select password!");

  return (
  <div>
    <Header />
    <p className="pass-box">{password}</p>
    <Input id="simple-button" type="button" className="btn btn-light" value="Simple password" changePassword={getPassword} passwordType="simple" />
    <Input id="strong-button" type="button" className="btn btn-light" value="Strong password" changePassword={getPassword} passwordType="strong" />
    <Footer /> 
  </div>);
}
export default App;
