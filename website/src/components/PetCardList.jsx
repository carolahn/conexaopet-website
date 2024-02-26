import React from 'react';
import PetCard from './PetCard';
import './PetCardList.css';

const PetCardList = ({ petList }) => {
  return (
    <div className="pet-card-list">
      {petList.map((pet, index) => (
        <PetCard key={index} {...pet} />
      ))}
    </div>
  );
};

export default PetCardList;