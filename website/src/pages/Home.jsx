import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/actions';
import CarouselHome from '../components/CarouselHome';
import './Home.css';
import Header from '../components/Header';
import PetCardList from '../components/PetCardList';
import InfiniteScroll from '../components/InfiniteScroll';
import mockPetCardData from '../components/mockPetCardData';
import mockEventCardData from '../components/mockEventCardData';

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
				<CarouselHome events={mockEventCardData}/>
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