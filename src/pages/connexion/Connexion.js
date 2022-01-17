import React from 'react'
import './Connexion.css'

function Connexion() {
    return (
        <div className='pageConnexion'>
            <h1>Se connecter à votre espace</h1>
            <form className='connexion'>
                <p>Veuillez remplir tous les champs pour vous connecter à votre espace d'administration</p>
                <div className='champs'>
                <input type='email' id='email' placeholder='Votre e-mail'/>
                <input type='password' id='password' placeholder='Votre mot de passe'/>
                </div>
                <button>Se connecter</button>
            </form>
        </div>
    )
}

export default Connexion
