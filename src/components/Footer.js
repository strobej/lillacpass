import React from 'react';
import '../App.css';


function Footer() {
    
    function getCurrentYear() {
       return new Date().getFullYear();         
    }  
    
    return (      
    <footer>
        <a href="https://github.com/strobej/lillac">
        <img className="git-icon" alt="github" src='github.png'/></a>
        <div className="copyright-icon">© Copyright {getCurrentYear()}</div> 
    </footer>
    );  
}

export default Footer;