import React, {useState, useEffect} from 'react';
import './Header.css'
import {ReactComponent as MenuIcon} from '../../assets/menu.svg'
import {ReactComponent as CloseIcon} from '../../assets/xmark.svg'



function Header() {

  const [menuStatus, setMenuStatus] = useState(false);

  function handleMenu(){

    setMenuStatus(!menuStatus);

  }

  // Add an event listener to handle window resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setMenuStatus(false);
      }
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  
  return (
    <nav className='navbar' id='navbar'>
      

      <div className='navbar__name'>
        <span>Naveen&nbsp;</span> 
        <span>Gaur</span>
      </div>  

      <div className='navbar__menu' onClick={handleMenu}>
        {menuStatus? <CloseIcon className= 'navbar__close-icon'/> : <MenuIcon className='navbar__menu-icon'  / >
        }
      </div>

      <div className={menuStatus?'navbar__item-hidden':'navbar__item'}>
          <a href='#navbar' aria-label='home' >Home</a>
          <a href='#skills' aria-label='skill'>Skill</a>
          <a href='#' aria-label='About'>About</a>
          <a href='#projects' aria-label='Projects'>Projects</a>
          <a href='#' aria-label='Contact'>Contact</a>

      </div>

    </nav>
  )
}

export default Header