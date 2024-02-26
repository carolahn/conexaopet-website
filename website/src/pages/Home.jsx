import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/actions';
import Carousel from '../components/Carousel';
import mockCarouselData from '../components/mockCarouselData';
import mockPetCardData from '../components/mockPetCardData';
import './Home.css';
import Header from '../components/Header';
import PetCardList from '../components/PetCardList';
import InfiniteScroll from '../components/InfiniteScroll';

const Home = () => {
	

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch an action to set isLoggedIn to false
    dispatch(setLoggedIn(false));
  };

  return (
    <div className='home-container'>
			<div className='home-body'>
				<Header/>
				<Carousel stories={mockCarouselData}/>
				{/* <button onClick={handleLogout}>Logout</button> */}
				<InfiniteScroll itemList={mockPetCardData}>
					{({ itemList, isLoading }) => (
						<PetCardList petList={itemList} />
					)}
				</InfiniteScroll>

			</div>
    </div>
  );
};

export default Home;