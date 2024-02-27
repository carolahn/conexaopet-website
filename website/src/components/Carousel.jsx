import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatarData } from '../utils/formatarData';

const Carousel = ({ events, loadCount, loadMoreItems, isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
	const [lastClick, setLastClick] = useState();
	const [isAtEnd, setIsAtEnd] = useState(false);
  const [width, height] = useWindowSize(events?.length);


	useEffect(() => {
		if (width >= 900) {
			const eventsShown = Math.floor(900 / (height * 0.22));
			const numCanClick = events?.length - eventsShown;
			setLastClick(numCanClick);

		} else {
			const eventsShown = Math.floor(width / (height * 0.22));
			const numCanClick = events?.length - eventsShown;
			setLastClick(numCanClick);
		}
	}, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events?.length);
	
		if (currentIndex === 0 || currentIndex === lastClick - 1) {
			loadMoreItems();
		}
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events?.length) % events?.length);
		setIsAtEnd(false);
  };

  const isAtBeginning = currentIndex === 0;

	const scrollToEvent = (eventId) => {
    const element = document.getElementById(eventId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    	{width >= 900 ? (
				<div className="carousel" style={{ width: '900px' }}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * height * 0.22}px)` }}>
						{events?.map((event, index) => (
							<div key={index} className="carousel-item" style={{ height: `${height * 0.2}px`, marginRight: `${height * 0.02}px`, paddingBottom: '1.5rem' }}>
								<img 
									src={event.imagens[0]} alt={`event ${index + 1}`} 
									style={{ height: '100%', objectFit: 'cover' }} 
									onClick={() => scrollToEvent(`event-${event.id}`)}
								/>
								<p>{formatarData(event.dataHoraInicio)}</p>
							</div>
						))}
					</div>
					<button className="carousel-button left" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
					<button className="carousel-button right" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
				</div>
			) : (

				<div className="carousel" style={{ width: '100%' }}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * height * 0.22}px)` }}>
						{events?.map((event, index) => (
							<div key={index} className="carousel-item" style={{ height: `${height * 0.2}px`, marginRight: `${height * 0.02}px`, paddingBottom: '1.5rem' }}>
								<img 
									src={event.imagens[0]} alt={`event ${index + 1}`} 
									style={{ height: '100%', objectFit: 'cover' }} 
									onClick={() => scrollToEvent(`event-${event.id}`)}
								/>
								<p>{formatarData(event.dataHoraInicio)}</p>
							</div>
						))}
					</div>
					<button className="carousel-button left mobile" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
					<button className="carousel-button right mobile" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
				</div>
			)}
    </>
  );
};

export default Carousel;
