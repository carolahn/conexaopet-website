import React from 'react';
import Carousel from '../components/Carousel';
import mockEventCardData from '../components/mockEventCardData';
import './Home.css';
import Header from '../components/Header';
import InfiniteScroll from '../components/InfiniteScroll';
import EventCardList from '../components/EventCardList';

const Event = () => {

  return (
    <div className='home-container'>
			<div className='home-body'>
				<Header/>
				<Carousel events={mockEventCardData}/>
				<InfiniteScroll itemList={mockEventCardData}>
					{({ itemList, isLoading }) => (
						<EventCardList eventList={itemList} />
					)}
				</InfiniteScroll>

			</div>
    </div>
  );
};

export default Event;