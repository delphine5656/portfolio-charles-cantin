import React from 'react'
import Card from '../../component/card/Card'
import { Link } from 'react-router-dom'
import Portrait from '../../images/portrait.jpg'
import Heart from '../../images/heart.jpg'
import Couple from '../../images/couple.jpg'
import Famille from '../../images/family.jpg'
import Grossesse from '../../images/grossesse.jpg'
import Baby from '../../images/bebe.jpg'
import './Tarif.css'

function Tarif() {
    return (
        <div className='pagaTarif'>
      
            <h1>Tarifs et Prestation</h1>
            <p>Voici les différents tarifs et prestations que je vous propose.</p>
        
            <main className="cardPrice">
        
            <Card
                image={Portrait}
                titre={'<< juste moi >>'} 
                prix={'-130€-'}
                decription={'Séance pour une personne'}
                decription2={'en extérieur ou en studio'}
           
            />
            <Card
                image={Couple}
                titre={'<< Pour deux >>'}
                prix={'-195€-'}
                decription={"Pour deux personnes"}
                decription2={"en extérieur ou en studio"}
            />
            <Card
                image={Famille}
                titre={'<< Famille >>'}
                prix={'-220€-'}
                decription={'Pour la famille ou les amis jusqu’à 4 personnes,)'}
                decription2={'en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)'}
            />

            <Card
                image={Grossesse}
                titre={'<< Il était une fois >>'}
                prix={'-160€-'}
                decription={'Photo de grossesse )'}
                decription2={'À votre domicile, en extérieur ou en studio'}
            />
            <Card
                image={Baby}
                titre={'<< Mon bébé >>'}
                prix={'-100€-'}
                decription={'Photo d’enfant jusqu’à 3 ans'}
                decription2={'photo à domicile'}
            />
            <Card
                image={Heart}
                titre={"<< J'immortalise l'événement >>"}
                prix={'-sur mesure-'}
                decription={'Prestation de mariage ou baptême'}
                decription2={'sur devis'}
            />
            
            </main>
            <h2>Plus de renseignements</h2>
            <p>Venez découvrir toutes mes réalisations en visitant ma page Portfolio. 
                    Pour tous renseignements, n'hésitez pas à m'envoyer un message via ma page contact</p>
            <div className='tarifButton'>
            <button><Link to='/portfolio' className='link'>Portfolio</Link></button>
            <button><Link to='/contact' className='link'>Contact</Link></button>
            </div>
        </div>
    )
}

export default Tarif
