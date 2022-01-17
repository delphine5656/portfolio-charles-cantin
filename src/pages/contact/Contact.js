import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import Aside from '../../component/aside/Aside'
import { Link } from 'react-router-dom'
import './Contact.css'


function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <section className='mainContact'>
                    <form method='post' 
                    className='mainConnexion' 
                    data-netlify='true'
                    onSubmit='submit'
                    >
                        <input type='hidden'name='form-name' value="contact"/>
                    <h3>Envoyer un message</h3>
                    <div className='champs'>
                    <input type='email' id='email' placeholder='Votre e-mail' name='email'/>
                    <input type='text' id='nom' placeholder='Votre nom' name='name'/>
                    <input type='text' id='prenonm' placeholder='Votre prénom'/>
                    <textarea name='message'>Votre message</textarea>
                    </div>
                    <button type='submit'>Envoyer</button>
                </form>

                <div className='coordonnee'>
                    <h3> Mes coordonnées</h3>
                    <p> <AiFillMail/> 2 rue des étoiles 34000 Montpellier</p>
                    <p> <AiFillPhone/> 06-00-00-00-00</p>
                    <p> <AiFillMessage/> charles-Cantin@gmail.com</p>
                </div>
                <div className='aside'>
                <Aside/>
            </div>
        
            </section>

            <h2>Plus de renseignements</h2>
            <p>Venez découvrir toutes mes réalisations en visitant ma page Portfolio. 
            Pour le tarif de mes prestations, vous trouverez tous les renseignements en page Tarifs</p>
            <div className='tarifButton'>
            <button><Link to='/portfolio' className='link'>Portfolio</Link></button>
            <button><Link to='/tarif' className='link'>Tarif</Link></button>
            </div>
        </>
    )
}

export default Contact
