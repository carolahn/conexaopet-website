import React from 'react';
import Carousel from '../components/Carousel';
import mockCarouselData from '../components/mockCarouselData';
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
				<Carousel stories={mockCarouselData}/>
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