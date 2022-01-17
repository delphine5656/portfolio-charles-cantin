import React from 'react'
import { Link } from 'react-router-dom'
import {social } from '../../component/navbar/Data';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <h3>Pages du site:</h3>
            <ul className='links'>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                    <Link to='/about'>A propos</Link>
                    </li>
                    <li>
                    <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                    <Link to='/tarif'>Tarif</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <h3>Mes réseaux sociaux:</h3>
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
            </div>
            <div>
            <h3>Auteur du site:</h3>
            <p>Tous droits réservés @Delphine-Gavaud</p>
            </div>
            
        </div>
    )
}

export default Footer
