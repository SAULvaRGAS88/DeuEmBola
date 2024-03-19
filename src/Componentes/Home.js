import React from 'react';
import { FundoPaginas } from './FundoPAginas';
import './Estilos/HomeCss.css';
import { Card } from '@mui/material';
import MenuConponente from './MenuComponente';


export const Home = () => {
  const menuItems = [
    { label: 'Home' },
    { label: 'Quem Somos' },
    { label: 'Galeria' },
    { label: 'Conatto' },
  ];

  return (
    <div>
      <FundoPaginas>
        <Card className='card-home'>
          <div>
            <MenuConponente menuItems={menuItems} />
          </div>

        </Card>
      </FundoPaginas>

    </div>
  );
};
