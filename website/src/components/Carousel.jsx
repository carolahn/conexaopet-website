import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatarData } from '../utils/formatarData';

const Carousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
	const [lastClick, setLastClick] = useState();
	const [eventList, setEventList] = useState([]);
	const [loadCount, setLoadCount] = useState(6);
	const [isLoading, setIsLoading] = useState(false);
	const [isAtEnd, setIsAtEnd] = useState(false);
  const [width, height] = useWindowSize(events?.length);


	useEffect(() => {
		if (width >= 900) {
			const eventsShown = Math.floor(900 / (height * 0.22));
			const numCanClick = eventList?.length - eventsShown;
			setLastClick(numCanClick);

		} else {
			const eventsShown = Math.floor(width / (height * 0.22));
			const numCanClick = eventList?.length - eventsShown;
			setLastClick(numCanClick);
		}
	}, [currentIndex]);

	useEffect(() => {
    // Atualiza os items quando a propriedade itemList é alterada
    setEventList(events.slice(0, loadCount));
  }, [events, loadCount]);

  useEffect(() => {
    // Carrega alguns itens iniciais ao montar o componente
    loadMoreItems();
  }, []);

	const loadMoreItems = () => {
		if (!isLoading) {
      setIsLoading(true);

      // Simulação de uma requisição assíncrona (pode ser substituído por uma chamada de API real)
      setTimeout(() => {
        setEventList((prevItems) => {
          const nextItems = events.slice(prevItems.length, prevItems.length + loadCount);

					if (nextItems.length === 0) {
						setIsAtEnd(true);
					}
          return [...prevItems, ...nextItems];
        });

        setIsLoading(false);
      }, 1000); // Aguarda 1 segundo para simular o carregamento assíncrono
    }
	}

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventList?.length);
	
		if (currentIndex === lastClick - 1) {
			loadMoreItems();
		}
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + eventList?.length) % eventList?.length);
		setIsAtEnd(false);
  };

  const isAtBeginning = currentIndex === 0;

  return (
    <>
    	{width >= 900 ? (
				<div className="carousel" style={{ width: '900px' }}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * height * 0.22}px)` }}>
						{eventList?.map((event, index) => (
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
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * height * 0.22}px)` }}>
						{eventList?.map((event, index) => (
							<div key={index} className="carousel-item" style={{ height: `${height * 0.2}px`, marginRight: `${height * 0.02}px`, paddingBottom: '1.5rem' }}>
								<img src={event.imagens[0]} alt={`event ${index + 1}`} style={{ height: '100%', objectFit: 'cover' }} />
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
