import React from 'react';
import PetCard from './PetCard';
import './PetCardList.css';

const PetCardList = ({ petList, isOwner = false }) => {
  return (
    <div className="pet-card-list">
      {petList.map((pet, index) => (
        <PetCard key={index} isOwner={isOwner} {...pet} />
      ))}
    </div>
  );
};

export default PetCardList;