import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatarData, formatarHora } from '../utils/formatarData';
import './EventCard.css';  
import starIcon from '../assets/images/star.png';
import starFilledIcon from '../assets/images/star-filled.png';
import moreIcon from '../assets/images/more.png';
import pinIcon from '../assets/images/pin.png';
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
}) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [starIconSrc, setStarIconSrc] = useState(starIcon);
	const [isMoreInfoVisible, setMoreInfoVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();

	const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      if (!prevIsFavorite) {
        setStarIconSrc(starFilledIcon);
      } else {
        setStarIconSrc(starIcon);
      }
      return !prevIsFavorite;
    });
  };

	const handleMoreInfoClick = () => {
    setMoreInfoVisible(!isMoreInfoVisible);
  };

	const allImages = [
		...imagens || [],
		...(animais?.map(animal => animal.imagens?.[0]) || [])
	];

	const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

	const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };

	const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === allImages.length - 1;


  return (
    <div className="event-card">
			<div className='event-card-header'>
				<div className='event-avatar'>
					<img src={protetor.imagem} alt={`Avatar de ${protetor.nickname}`} />
				</div>
				<h2>{protetor.nickname}</h2>
			</div>

			<div className='event-card-body'>
				<div className='event-card-images-container'>
					{width >= 900 ? (
						<div className="carousel" style={{ width: '500px' }}>
							<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 500}px)` }}>
								{allImages?.map((imagem, index) => (
									<div key={index} style={{ width: '500px' }}>
										<img src={imagem} alt={`Foto do evento`} className='event-image'/>
									</div>
								))}
							</div>
							<button className="carousel-button left" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
							<button className="carousel-button right" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
						</div>
					) : (
						<div className="carousel" style={{ height: `${width - 30}px`, width: `${width - 30}px` }}>
							<SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
								<div style={{ height: `${width - 30}px`, width: `${width - 30}px`, display: 'flex', paddingBottom: '1.5rem' }}>
									{allImages?.map((imagem, index) => (
										<div key={index} className="carousel-item" style={{ height: `${width - 30}px`, width: `${width - 30}px`, paddingBottom: '1.5rem' }} >
											<img src={imagem} alt={`Story ${index + 1}`} style={{ height: `${width - 30}px`, width: `${width - 30}px`, objectFit: 'cover' }} />
										</div>
									))}

								</div>
							</SwipeableViews>
						</div>
					)}

				</div>
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
    </div>
  );
};

export default EventCard;
