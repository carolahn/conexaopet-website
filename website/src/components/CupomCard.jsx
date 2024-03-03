import React, { useState } from 'react';
import starIcon from '../assets/images/star.png';
import starFilledIcon from '../assets/images/star-filled.png';
import moreIcon from '../assets/images/more.png';
import printIcon from '../assets/images/print.png';
import ribbonIcon from '../assets/images/ribbon.png';
import pinIcon from '../assets/images/pin.png';
import cakeIcon from '../assets/images/cake.png';
import weightIcon from '../assets/images/weight.png';
import infoIcon from '../assets/images/info.png';
import quoteIcon from '../assets/images/quote.png';
import webIcon from '../assets/images/web.png';
import { formatarData } from '../utils/formatarData';

const CupomCard = ({ cupom }) => {

  const handleOpenWebsite = () => {
    window.open(cupom.site, "_blank");
  };

  return (
    <div className='cupom-card' id={cupom.id}>
      <div className='cupom-card-header'>
				<div className='cupom-avatar'>
					<img src={cupom.patrocinador.avatar} alt={`Avatar de ${cupom.patrocinador.nickname}`} />
				</div>
				<h2>{cupom.patrocinador.nickname}</h2>
			</div>

      <div className='cupom-card-images-container'>
      <img src={cupom.imagem} alt={`Cupom`} className='cupom-image'/>
      </div>

      <div className='cupom-card-bar'>
        <div className='cupom-card-summary'>
          <h2>Validade: {formatarData(cupom.validade)}</h2>
        </div>
        <div className='cupom-card-buttons'>
          <div className='web-icon-container' onClick={handleOpenWebsite}>
            <img src={webIcon} alt='Saiba mais' className='web-icon' />
          </div>
        </div>
      </div>

      <style>
        {`
          .cupom-card{
            width: 500px;
            display: flex;
            flex-direction: column;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            padding: 15px;
          }

          .cupom-card-header {
            display: flex;
            align-items: center;
            padding: 0 0 7px 3px;
          }
            
          .cupom-avatar {
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 15px;
          }
            
          .cupom-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .cupom-card-images-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          .cupom-image {
            width: 100%;
            object-fit: cover;
          }

          .cupom-card-bar {
            display: flex;
          }
          
          .cupom-card-summary {
            width: 80%;
          }
          
          .cupom-card-buttons {
            width: 20%;
            display: flex;
            justify-content: end;
          }
          
          .star-icon, .more-icon, .web-icon {
            cursor: pointer;
            height: 24px;
          }
          
          .cupom-label {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 15px;
            margin-right: 10px;
            font-weight: bold;
            background-color: var(--color-primary);
            color: var(--color-text-clear);
          }
          
        `}
      </style>
    </div>
  );
};

export default CupomCard;