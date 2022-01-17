import React, {useState, useRef, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {social } from './Data';
import logo from '../../images/logo.jpg'
import './Navbar.css';
import { Link} from 'react-router-dom';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
    return (
        <nav className='nav-center'>
            <div className='nav-header'>
                <img src={logo} className='logo' alt="logo de Charles Cantin"/>
                <button className='nav-toggle'  onClick={toggleLinks}>
                    <FaBars/>
                </button>
            </div>
            <div className='links-container show-container'  ref={linksContainerRef}>
                <ul className='links'ref={linksRef}>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                    <Link to='/about'>A propos</Link>
                    </li>
                    <li>
                    <Link to='/portfolio'>Portfolio
                    <ul className='dropdown'>
                        <li><Link to='/Portrait'>Portrait</Link></li>
                        <li><Link to='/Couple'>Couple</Link></li>
                        <li><Link to='/Grossesse'>Grossesse</Link></li>
                        <li><Link to='/Bebe'>Bébé</Link></li>
                        <li><Link to='/Famille'>Famille</Link></li>
                        <li><Link to='/Baptème'>Baptème</Link></li>
                        <li><Link to='/Mariage'>Mariage</Link></li>
                      </ul>
                    </Link>
                    </li>
                    <li>
                    <Link to='/tarif'>Tarif</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div>

                </div>
            </div>
            <ul className='social-icons'>
                    {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a target="_blank" href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
            <button><Link to='/connexion'>Se connecter</Link></button>
     </nav>
    )
}
