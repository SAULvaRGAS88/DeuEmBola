import React from 'react';
import logoFundo from '../assets/logoDeuEmBola.jpg';

export const FundoPaginas = ({ children }) => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${logoFundo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.9,
            position: 'relative',
        }}>
            {children}
        </div>
    );
};
