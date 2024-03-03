import React from 'react';
import CupomCard from './CupomCard';

const CupomCardList = ({ cupomList }) => {
  return (
    <div className='event-card-list'>
      {cupomList.map((cupom, index) => (
        <CupomCard key={index} cupom={cupom} id={`cupom-${cupom.id}`} />
      ))}
    </div>
  );
};

export default CupomCardList;