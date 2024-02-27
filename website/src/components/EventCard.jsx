import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatarData, formatarHora } from '../utils/formatarData';
import './EventCard.css';  
import starIcon from '../assets/images/star.png';
import starFilledIcon from '../assets/images/star-filled.png';
import moreIcon from '../assets/images/more.png';
import printIcon from '../assets/images/print.png';
import ribbonIcon from '../assets/images/ribbon.png';
import pinIcon from '../assets/images/pin.png';
import cakeIcon from '../assets/images/cake.png';
import weightIcon from '../assets/images/weight.png';
import infoIcon from '../assets/images/info.png';
import quoteIcon from '../assets/images/quote.png';
import clockIcon from '../assets/images/clock.png';

const EventCard = ({
  protetor,
  imagens,
  animais,
  dataHoraInicio,
  dataHoraFim,
  local,
  descricao,
	id,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [starIconSrc, setStarIconSrc] = useState(starIcon);
	const [isMoreInfoVisible, setMoreInfoVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();
	const [currentAnimal, setCurrentAnimal] = useState(null);

	useEffect(() => {
    setCurrentIndex(0);
  }, [width]);

	useEffect(() => {
		updateCurrentAnimal();
	}, [currentIndex]);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      setStarIconSrc(prevIsFavorite ? starIcon : starFilledIcon);
      return !prevIsFavorite;
    });
  };

	const handleMoreInfoClick = () => {
    setMoreInfoVisible(!isMoreInfoVisible);
  };

	const allImages = [
		...imagens.map(imagem => ({ animalId: null, imagem: imagem })),
		...animais.map(animal => ({
			animalId: animal.id,
			imagem: animal.imagens.length > 0 ? animal.imagens[0] : null
		}))
	].filter(item => item.imagem !== null);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = (prevIndex + 1) % allImages.length;
			updateCurrentAnimal(newIndex);
			return newIndex;
		});
	};

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };
	
  const updateCurrentAnimal = () => {
    const currentImage = allImages[currentIndex];
    setCurrentAnimal(currentImage.animalId !== null ? animais.find(animal => animal.id === currentImage.animalId) : null);
  };

	const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === allImages.length - 1;


  return (
    <div className="event-card" id={id}>
			<div className='event-card-header'>
				<div className='event-avatar'>
					<img src={protetor.imagem} alt={`Avatar de ${protetor.nickname}`} />
				</div>
				<h2>{protetor.nickname}</h2>
			</div>

			<div className='event-card-body'>
				<div className='event-card-images-container'>
					{width >= 900 ? (
						<div className="event-carousel" style={{ width: '500px' }}>
							<div className="event-carousel-content" style={{ transform: `translateX(-${currentIndex * 500}px)` }}>
								{allImages?.map((imageObj, index) => (
									<div key={index} style={{ width: '500px' }}>
										<img src={imageObj.imagem} alt={`Foto do evento`} className='event-image'/>
									</div>
								))}
							</div>
							<button className="event-carousel-button left" onClick={prevSlide} disabled={isAtBeginning} >&#10094;</button>
							<button className="event-carousel-button right" onClick={nextSlide} disabled={isAtEnd} >&#10095;</button>
						</div>

					) : (
						<div className="event-carousel" style={{ height: `${width - 30}px`, width: `${width - 30}px` }}>
							<div className="event-carousel-content" style={{ transform: `translateX(-${currentIndex * (width - 30)}px)` }}>
								{allImages?.map((imageObj, index) => (
									<div key={index} style={{ width: `${width - 30}px` }}>
										<img src={imageObj.imagem} alt={`Foto do evento`} className='event-image' style={{ height: `${width - 30}px`, width: `${width - 30}px`, objectFit: 'cover' }}/>
									</div>
								))}
							</div>
							<button className="event-carousel-button left mobile" onClick={prevSlide} disabled={isAtBeginning} >&#10094;</button>
							<button className="event-carousel-button right mobile" onClick={nextSlide} disabled={isAtEnd} >&#10095;</button>
						</div>
					)}
				</div>

				{!currentAnimal && (
					<div>
					<div className='event-card-bar'>
						<div className='event-card-summary'>
							<h2>{formatarData(dataHoraInicio)}</h2>
							<p className='event-label'>{local.cidade}, {local.uf}</p>
							<p className='event-label'>{local.nome}</p>
						</div>
						<div className='event-card-buttons'>
							<div className='star-icon-container' onClick={handleFavoriteClick}>
								<img src={starIconSrc} alt='Favorito' className='star-icon' />
							</div>
							<div className='more-icon-container' onClick={handleMoreInfoClick}>
								<img src={moreIcon} alt='Saiba mais' className='more-icon' />
							</div>
						</div>
					</div>
					{isMoreInfoVisible && (
						<div className='event-info'>
							<div className='event-info-line'>
								<img src={pinIcon} alt='Endereço' className='event-info-icon'/>
								<div className='event-data'>
									<p>{local.rua}, {local.numero} - {local.bairro}</p>
								</div>
							</div>
							<div className='event-info-line'>
								<img src={clockIcon} alt='Horário' className='event-info-icon'/>
								<div className='event-data'>
									<p>das {formatarHora(dataHoraInicio)} às {formatarHora(dataHoraFim)}</p>
								</div>
							</div>
							<div className='event-info-line'>
								<img src={quoteIcon} alt='Descrição' className='event-info-icon'/>
								<div className='event-data'>{descricao}</div>
							</div>
						</div>
					)}
					</div>
				)}

				{currentAnimal && (
					<div>
						<div className='pet-card-bar'>
							<div className='pet-card-summary'>
								<h2>{currentAnimal.nome}</h2>
								<p className='pet-label'>{currentAnimal.sexo}</p>
								<p className='pet-label pet-age'>{currentAnimal.idade}</p>
								<p className='pet-label pet-size'>{currentAnimal.porte}</p>
							</div>
							<div className='pet-card-buttons'>
								<div className='star-icon-container' onClick={handleFavoriteClick}>
									<img src={starIconSrc} alt='Favorito' className='star-icon' />
								</div>
								<div className='more-icon-container' onClick={handleMoreInfoClick}>
									<img src={moreIcon} alt='Saiba mais' className='more-icon' />
								</div>
							</div>
						</div>
						{isMoreInfoVisible && (
							<div className='pet-info'>
								<div className='pet-info-row'>
									<div className='pet-info-col'>
										<img src={pinIcon} alt='Cidade' className='pet-info-icon'/>
										<div className='pet-data'>{currentAnimal.cidade}</div>
									</div>
								</div>
								<div className='pet-info-row'>
									<div className='pet-info-col'>
										<img src={printIcon} alt='Tipo de animal' className='pet-info-icon'/>
										<div className='pet-data'>{currentAnimal.tipo}</div>
									</div>
									<div className='pet-info-col'>
										<img src={ribbonIcon} alt='Raça' className='pet-info-icon'/>
										<div className='pet-data'>{currentAnimal.raca}</div>
									</div>
								</div>
								<div className='pet-info-row'>
									<div className='pet-info-col'>
										<img src={cakeIcon} alt='Idade' className='pet-info-icon'/>
										<div className='pet-data'>{currentAnimal.idade}</div>
									</div>
									<div className='pet-info-col'>
										<img src={weightIcon} alt='Peso' className='pet-info-icon'/>
										<div className='pet-data'>{currentAnimal.porte}</div>
									</div>
								</div>
								<div className='pet-info-line'>
									<img src={infoIcon} alt='Informações gerais' className='pet-info-icon'/>
									<div className='pet-data'>
										<p>{currentAnimal.convivio}</p>
										<p>{currentAnimal.personalidade}</p>
									</div>
								</div>
								<div className='pet-info-line'>
									<img src={quoteIcon} alt='Descrição' className='pet-info-icon'/>
									<div className='pet-data'>{currentAnimal.descricao}</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
    </div>
  );
};

export default EventCard;
