import React, { useEffect, useState } from 'react';
import closeIcon from '../assets/images/close.png';
import pawIcon from '../assets/images/paw.png';
import pawFilledIcon from '../assets/images/paw-filled.png';
import calendarIcon from '../assets/images/calendar.png';
import calendarFilledIcon from '../assets/images/calendar-filled.png';
import './NewPublicationHeader.css';

const NewPublicationHeader = ({ closeModal, setSelectedTab }) => {
  const [pawIconSrc, setPawIconSrc] = useState(pawFilledIcon);
  const [calendarIconSrc, setCalendarIconSrc] = useState(calendarIcon);

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

  return (
    <div className='new-publication-header'>
      <div className='header-title'>
        <div className='close-icon-container' onClick={closeModal}>
          <img src={closeIcon} alt='Buscar' className='close-icon' />
        </div>
        <h2>Nova publicação</h2>
      </div>

      <div className='menu-options-container'>
        <div className='paw-icon-container' onClick={handleSelectPet}>
          <img src={pawIconSrc} alt='Novo animal' className='paw-icon' />
        </div>
        <div className='calendar-icon-container' onClick={handleSelectEvent}>
          <img src={calendarIconSrc} alt='Novo evento' className='calendar-icon' />
        </div>
      </div>

    </div>
  );
};

export default NewPublicationHeader;