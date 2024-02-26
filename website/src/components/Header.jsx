import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user.png';
import userFilledIcon from '../assets/images/user-filled.png';
import searchIcon from '../assets/images/search.png';
import searchFilledIcon from '../assets/images/search-filled.png';
import UserModal from './UserModal';
import SearchModal from './SearchModal';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [isUserModalOpen, setIsUserModalOpen] = useState(false);
	const [userIconSrc, setUserIconSrc] = useState(userIcon);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
	const [searchIconSrc, setSearchIconSrc] = useState(searchIcon);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

	const openUserModal = () => {
		closeSearchModal();
    if (isUserModalOpen) {
			setIsUserModalOpen(false);
			setUserIconSrc(userIcon);
		} else {
			setIsUserModalOpen(true);
			setUserIconSrc(userFilledIcon);
		}
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
		setUserIconSrc(userIcon);
  };

	const openSearchModal = () => {
		closeUserModal();
    if (isSearchModalOpen) {
			setIsSearchModalOpen(false);
			setSearchIconSrc(searchIcon);
		} else {
			setIsSearchModalOpen(true);
			setSearchIconSrc(searchFilledIcon);
		}
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
		setSearchIconSrc(searchIcon);
  };

  return (
    <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
			<div className='header-body'>
				<img src={logo} alt='Logo Conexão Pet' className='logo' />

				<div className='menu-options-container'>
					<div className='search-icon-container' onClick={openSearchModal}>
						<img src={searchIconSrc} alt='Buscar' className='search-icon' />
					</div>
					<div className='user-icon-container' onClick={openUserModal}>
						<img src={userIconSrc} alt='Perfil' className='user-icon' />
					</div>
				</div>
			</div>

			<UserModal isModalOpen={isUserModalOpen} closeModal={closeUserModal}>
				<h2>Opções do Usuário</h2>
        <button onClick={closeUserModal}>Fechar</button>
			</UserModal>

			<SearchModal isModalOpen={isSearchModalOpen} closeModal={closeSearchModal}>
				<h2>Opções do Usuário</h2>
        <button onClick={closeSearchModal}>Fechar</button>
			</SearchModal>
    </div>
  );
};

export default Header;
