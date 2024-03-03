import React from 'react';
import { Link } from 'react-router-dom';
import returnIcon from '../assets/images/return.png';

const SimpleHeader = ({ title }) => {
  return (
    <div className='header'>
      <div className='header-body'>
        <div className='header-title'>
          <div className='return-icon-container' >
            <Link to="/">
                <img src={returnIcon} alt='Voltar' className='return-icon' />
            </Link>
          </div>
          <h2>{title}</h2>  
        </div>

      </div>

      <style>
        {`
          .header {
            height: 49px;
            border-bottom: 1px solid var(--color-detail);
            display: flex;
            justify-content: space-between;
          }

          .header-body {
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            padding: 3px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .header-title {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
          
          }

          .return-icon-container {
            height: 100%;
            padding-right: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          
          .return-icon {
            height: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default SimpleHeader;