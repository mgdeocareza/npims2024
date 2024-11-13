import React from "react";
import { Link } from "react-router-dom";
import npims_logo from './npims-logo-b.png'; 
import npims_words from './npims-words.png'; 
import mainlib_logo from './mainlib-logo.png'; 
import uplb_logo from './uplb-logo.png'; 

const Header = () => {
    return (
        <nav style={{
            backgroundColor: '#8a1538',
            width: '100%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 20px', 
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
                    <img src={npims_logo} alt="NPIMS Logo" style={{ height: '40px' }} />
                    <img src={npims_words} alt="Logo 1" style={{ height: '50px', marginLeft: '20px' }} />
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <img src={mainlib_logo} alt="Logo 2" style={{ height: '50px', marginRight: '10px' }} />
                <img src={uplb_logo} alt="Logo 3" style={{ height: '50px' }} />
            </div>
        </nav>
    );
};

export default Header;
