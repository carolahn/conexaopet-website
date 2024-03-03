import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './ProfileProtector.css';
import PetCardList from '../components/PetCardList';
import EventCardList from '../components/EventCardList';
import mockPetCardData from '../components/mockPetCardData';
import mockEventCardData from '../components/mockEventCardData';
import { mockProtectorData, mockProtectorAnimals, mockProtectorEvents } from '../components/mockProtectorData';
import { mockMemberData, mockCupomData, mockSponsorData } from '../components/mockFormData';
import InfiniteScroll from '../components/InfiniteScroll';
import NewPublicationModal from '../components/NewPublicationModal';
import ProtectorCardDashboard from '../components/ProtectorCardDashboard';
import MemberCardDashboard from '../components/MemberCardDashboard';
import CupomCardList from '../components/CupomCardList';
import SponsorCardDashboard from '../components/SponsorCardDashboard';


const DashboardSponsor = () => {
  const [selectedTab, setSelectedTab] = useState('cupom');
  const { id } = useParams();
  const isOwner = true;

  return (
    <div className='profile-container'>
      <Header />
      <div className='profile-body'>
        <SponsorCardDashboard sponsor={mockSponsorData} setSelectedTab={setSelectedTab} />

        {selectedTab === 'cupom' && (
          <InfiniteScroll itemList={mockCupomData}>
            {({ itemList, isLoading }) => (
              <CupomCardList cupomList={itemList}/>
            )}
          </InfiniteScroll>
        )}
      </div>

      
    </div>
  );
};

export default DashboardSponsor;