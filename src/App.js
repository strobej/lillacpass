import React, {useState} from 'react';
import './App.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Input from '../src/components/Input';

function App() {
  const [password, getPassword] = useState();

  return (
  <div>
    <Header />
    <div className="main-page">
      <p className="pass-box">{password}</p>
      <Input id="simple-button" type="button" className="btn btn-light" value="Simple password" changePassword={getPassword} passwordType="simple" />
      <Input id="complex-button" type="button" className="btn btn-light" value="Complex password" changePassword={getPassword} passwordType="complex" />
    </div>
    <Footer /> 
  </div>);
}
export default App;
