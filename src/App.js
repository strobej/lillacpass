import React, {useState} from 'react';
import './App.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Input from '../src/components/Input';

function App() {
  const [password, getPassword] = useState("");

  return (
  <div>
    <Header />
    <div className="main-page">
      <p className="pass-box">{password}</p>
      <div className="password-buttons">
      <Input id="simple-button" type="button" value="Simple password" changePassword={getPassword} passwordType="simple" />
      <Input id="complex-button" type="button" value="Complex password" changePassword={getPassword} passwordType="complex" />
      </div>
      <div className="copy">
      { password !== "" &&
        <Input id="copy-button" type="button" className="btn btn-light " value="Copy" password={password} />
      }
      </div>
    </div>
    <Footer /> 
  </div>);
}
export default App;
