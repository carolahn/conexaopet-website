import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Carousel.css';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatarData } from '../utils/formatarData';

const Carousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();

	const handleChangeIndex = (index) => {
		setCurrentIndex(index);
		console.log(index);
	};

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events?.length) % events?.length);
  };

  const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === events?.length - 1;

  return (
    <>
    	{width >= 900 ? (
				<div className="carousel" style={{ width: '900px' }}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * height * 0.22}px)` }}>
						{events?.map((event, index) => (
							<div key={index} className="carousel-item" style={{ height: `${height * 0.2}px`, marginRight: `${height * 0.02}px`, paddingBottom: '1.5rem' }}>
								<img src={event.imagens[0]} alt={`event ${index + 1}`} style={{ height: '100%', objectFit: 'cover' }} />
								<p>{formatarData(event.dataHoraInicio)}</p>
							</div>
						))}
					</div>
					<button className="carousel-button left" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
					<button className="carousel-button right" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
				</div>
			) : (
				<div className="carousel" style={{ width: '100%' }}>
					<SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
						<div style={{ height: `${height * 0.2}px`, width: '100%', display: 'flex', paddingBottom: '1.5rem' }}>
							{events?.map((event, index) => (
								<div key={index} className="carousel-item" style={{ height: `${height * 0.2}px`, width: `${height * 0.2}px`, marginRight: `${height * 0.02}px`, paddingBottom: '1.5rem' }} >
									<img src={event.imagens[0]} alt={`event ${index + 1}`} style={{ height: '100%', objectFit: 'cover' }} />
									<p>{formatarData(event.dataHoraInicio)}</p>
								</div>
							))}
						</div>
					</SwipeableViews>
				</div>
			)}
    </>
  );
};

export default Carousel;
