import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './ProfileProtector.css';
import PetCardList from '../components/PetCardList';
import EventCardList from '../components/EventCardList';
import mockPetCardData from '../components/mockPetCardData';
import mockEventCardData from '../components/mockEventCardData';
import { mockProtectorData, mockProtectorAnimals, mockProtectorEvents } from '../components/mockProtectorData';
import { mockMemberData, mockCupomData } from '../components/mockFormData';
import InfiniteScroll from '../components/InfiniteScroll';
import NewPublicationModal from '../components/NewPublicationModal';
import ProtectorCardDashboard from '../components/ProtectorCardDashboard';
import MemberCardDashboard from '../components/MemberCardDashboard';
import CupomCardList from '../components/CupomCardList';


const DashboardMember = () => {
  const [selectedTab, setSelectedTab] = useState('pet');
  const { id } = useParams();
  const isOwner = false;

  return (
    <div className='profile-container'>
      <Header />
      <div className='profile-body'>
        <MemberCardDashboard member={mockMemberData} setSelectedTab={setSelectedTab} />

        {selectedTab === 'pet' && (
          <InfiniteScroll itemList={mockPetCardData}>
            {({ itemList, isLoading }) => (
              <PetCardList petList={itemList} isOwner={isOwner}/>
            )}
          </InfiniteScroll>
        )}

        {selectedTab === 'event' && (
          <InfiniteScroll itemList={mockEventCardData}>
            {({ itemList, isLoading }) => (
              <EventCardList eventList={itemList}/>
            )}
          </InfiniteScroll>
        )}

        {selectedTab === 'cupom' && (
          <InfiniteScroll itemList={mockCupomData}>
            {({ itemList, isLoading }) => (
              <CupomCardList cupomList={itemList}/>
            )}
          </InfiniteScroll>
        )}
      </div>

      <style>
        {`
        
        `}
      </style>
    </div>
  );
};

export default DashboardMember;