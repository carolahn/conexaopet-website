import React from 'react';
import './EventCardList.css';
import EventCard from './EventCard';

const EventCardList = ({ eventList }) => {
  return (
    <div className='event-card-list'>
      {eventList.map((event, index) => (
        <EventCard key={index} {...event} id={`event-${event.id}`} />
      ))}
    </div>
  );
};

export default EventCardList;