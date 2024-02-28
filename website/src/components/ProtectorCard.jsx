import React, { useState, useEffect } from 'react';
import './ProtectorCard.css';
import DonationModal from './DonationModal';
import whatsappIcon from '../assets/images/whatsapp.png';
import donationIcon from '../assets/images/donation.png';
import pawIcon from '../assets/images/paw.png';
import pawFilledIcon from '../assets/images/paw-filled.png';
import calendarIcon from '../assets/images/calendar.png';
import calendarFilledIcon from '../assets/images/calendar-filled.png';

const ProtectorCard = ({ protector, setSelectedTab }) => {
  const [pawIconSrc, setPawIconSrc] = useState(pawFilledIcon);
  const [calendarIconSrc, setCalendarIconSrc] = useState(calendarIcon);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://web.whatsapp.com/send?phone=${protector.celular}`, '_blank');
  };

  const handleSelectPet = () => {
    setPawIconSrc(pawFilledIcon);
    setCalendarIconSrc(calendarIcon);
    setSelectedTab('pet');
  };

  const handleSelectEvent = () => {
    setPawIconSrc(pawIcon);
    setCalendarIconSrc(calendarFilledIcon);
    setSelectedTab('event');
  };

  const openDonationModal = () => {
    setIsDonationModalOpen(!isDonationModalOpen);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };


  return (
    <div className='protector-card'>

      <div className='protector-card-header'>
				<div className='protector-avatar'>
					<img src={protector.imagem} alt={`Avatar de ${protector.nickname}`} />
				</div>
        <div className='protector-name-button'>
				  <h2>{protector.nickname}</h2>
          <div className='protector-buttons'>
            <div className='whatsapp-icon-container' onClick={handleWhatsAppClick}>
              <img src={whatsappIcon} alt='Whatsapp' className='whatsapp-icon icon' />
            </div>
            <div className='donation-icon-container' onClick={openDonationModal}>
              <img src={donationIcon} alt='Para doar' className='donation-icon icon' />
            </div>
          </div>
        </div>
			</div>

      <div className='protector-card-description'>
        {protector.descricao}
      </div>

      <div className='protector-card-tabs'>
        <div className='paw-icon-container' onClick={handleSelectPet}>
          <img src={pawIconSrc} alt='Animais disponíveis' className='paw-icon' />
        </div>
        <div className='calendar-icon-container' onClick={handleSelectEvent}>
          <img src={calendarIconSrc} alt='Próximos eventos' className='calendar-icon' />
        </div>
      </div>

      <DonationModal isModalOpen={isDonationModalOpen} closeModal={closeDonationModal} pix={protector.pix} />
    </div>
  );
};

export default ProtectorCard;