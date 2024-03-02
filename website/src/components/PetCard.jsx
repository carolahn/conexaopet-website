import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import './PetCard.css';  
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
import editIcon from '../assets/images/edit.png';
import trashIcon from '../assets/images/trash.png';
import DonationModal from './DonationModal';
import DiscartModal from './DiscartModal';
import NewPetForm from './NewPetForm';
import { mockEditPetData } from './mockFormData';
import NewPublicationModal from './NewPublicationModal';

const PetCard = ({
  avatar,
  nome,
	cidade,
  imagens,
  tipo,
  sexo,
  idade,
  porte,
  raca,
  protetor,
  convivio,
  personalidade,
  descricao,
	isOwner = false,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [starIconSrc, setStarIconSrc] = useState(starIcon);
	const [isMoreInfoVisible, setMoreInfoVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();
	const [isDiscartModalOpen, setIsDiscartModalOpen] = useState(false);
	const [isNewPublicationModalOpen, setIsNewPublicationModalOpen] = useState(false);

	useEffect(() => {
    // Atualizar o índice do slide para 0 ao redimensionar a janela
    setCurrentIndex(0);
  }, [width]);

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

	const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

	const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };

	const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === imagens.length - 1;

	const openDiscartModal = () => {
    setIsDiscartModalOpen(!isDiscartModalOpen);
  };

	const closeDiscartModal = () => {
    setIsDiscartModalOpen(false);
  };

	const openNewPublicationModal = () => {
		setIsNewPublicationModalOpen(!isNewPublicationModalOpen);
	};

	const closeNewPublicationModal = () => {
		setIsNewPublicationModalOpen(false);
	};


  return (
    <div className="pet-card">
			<div className='pet-card-header'>
				<div className='pet-header'>
					<div className='pet-avatar'>
						<img src={avatar} alt={`Avatar de ${nome}`} />
					</div>
					<h2>{protetor}</h2>
				</div>
				{isOwner && (
					<div className='pet-options-container'>
						<div className='icon-container' onClick={openNewPublicationModal}>
							<img src={editIcon} alt='Buscar' className='edit-icon' />
						</div>
						<div className='icon-container' onClick={openDiscartModal}>
							<img src={trashIcon} alt='Perfil' className='trash-icon' />
						</div>
					</div>
				)}
			</div>

			<div className='pet-card-body'>
				<div className='pet-card-images-container'>
					{width >= 900 ? (
						<div className="pet-carousel" style={{ maxWidth: '500px' }}>
							<div className="pet-carousel-content" style={{ transform: `translateX(-${currentIndex * 500}px)` }}>
								{imagens.map((imagem, index) => (
									<div key={index} style={{ width: '500px' }}>
										<img src={imagem} alt={`Foto de ${nome}`} className='pet-image'/>
									</div>
								))}
							</div>
							<button className="pet-carousel-button left" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
							<button className="pet-carousel-button right" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
						</div>

					) : (
						<div className="pet-carousel" style={{ height: `${width - 30}px`, width: `${width - 30}px` }}>
							<div className="pet-carousel-content" style={{ transform: `translateX(-${currentIndex * (width - 30)}px)` }}>
								{imagens.map((imagem, index) => (
									<div key={index} style={{ width: `${width - 30}px` }}>
										<img src={imagem} alt={`Foto de ${nome}`} className='pet-image' style={{ height: `${width - 30}px`, width: `${width - 30}px`, objectFit: 'cover' }}/>
									</div>
								))}
							</div>
							<button className="pet-carousel-button left mobile" onClick={prevSlide} disabled={isAtBeginning}>&#10094;</button>
							<button className="pet-carousel-button right mobile" onClick={nextSlide} disabled={isAtEnd}>&#10095;</button>
						</div>
					)}

				</div>
				<div className='pet-card-bar'>
					<div className='pet-card-summary'>
						<h2>{nome}</h2>
						<p className={`pet-label pet-${sexo.toLowerCase()}`}>{sexo}</p>
						<p className='pet-label pet-age'>{idade}</p>
						<p className='pet-label pet-size'>{porte}</p>
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
								<div className='pet-data'>{cidade}</div>
							</div>
						</div>
						<div className='pet-info-row'>
							<div className='pet-info-col'>
								<img src={printIcon} alt='Tipo de animal' className='pet-info-icon'/>
								<div className='pet-data'>{tipo}</div>
							</div>
							<div className='pet-info-col'>
								<img src={ribbonIcon} alt='Raça' className='pet-info-icon'/>
								<div className='pet-data'>{raca}</div>
							</div>
						</div>
						<div className='pet-info-row'>
							<div className='pet-info-col'>
								<img src={cakeIcon} alt='Idade' className='pet-info-icon'/>
								<div className='pet-data'>{idade}</div>
							</div>
							<div className='pet-info-col'>
								<img src={weightIcon} alt='Peso' className='pet-info-icon'/>
								<div className='pet-data'>{porte}</div>
							</div>
						</div>
						<div className='pet-info-line'>
							<img src={infoIcon} alt='Informações gerais' className='pet-info-icon'/>
							<div className='pet-data'>
								<p>{convivio}</p>
								<p>{personalidade}</p>
							</div>
						</div>
						<div className='pet-info-line'>
							<img src={quoteIcon} alt='Descrição' className='pet-info-icon'/>
							<div className='pet-data'>{descricao}</div>
						</div>
          </div>
        )}
			</div>

			<NewPublicationModal isModalOpen={isNewPublicationModalOpen} closeModal={closeNewPublicationModal} initialValues={mockEditPetData} isNewPublication={false}/>
			<DiscartModal isModalOpen={isDiscartModalOpen} closeModal={closeDiscartModal} publicationId={1} />
    </div>
  );
};

export default PetCard;
