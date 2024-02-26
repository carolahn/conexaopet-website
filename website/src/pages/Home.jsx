import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/actions';
import Carousel from '../components/Carousel';
import mockCarouselData from '../components/mockCarouselData';
import './Home.css';
import Header from '../components/Header';
import PetCard from '../components/PetCard';
import PetCardList from '../components/PetCardList';

const Home = () => {
	const mockData = [
		{
			avatar: 'https://via.placeholder.com/200',
			nome: 'Fido',
			cidade: 'Curitiba',
			imagens: [
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
			],
			tipo: 'Cachorro',
			sexo: 'macho',
			idade: '2 anos',
			porte: 'Médio',
			raca: 'Vira-lata',
			protetor: 'Protetor XYZ',
			convivio: 'Convive bem com outros animais',
			personalidade: 'Brincalhão e carinhoso',
			descricao: 'Fido é um cachorro adorável em busca de um lar. Ele adora brincar e está pronto para ser o seu melhor amigo!',
		},
		{
			avatar: 'https://via.placeholder.com/200',
			nome: 'Luna',
			cidade: 'Curitiba',
			imagens: [
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
				'https://via.placeholder.com/300',
			],
			tipo: 'Gato',
			sexo: 'fêmea',
			idade: '1 ano',
			porte: 'Pequeno',
			raca: 'Siamês',
			protetor: 'Protetor ABC',
			convivio: 'Prefere ser o único animal da casa',
			personalidade: 'Calma e independente',
			descricao: 'Luna é uma gatinha adorável que gosta de tranquilidade. Ela procura um lar acolhedor onde possa ser a rainha do pedaço!',
		}
	];

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
				<PetCardList petList={mockData}/>
			</div>
    </div>
  );
};

export default Home;