import React, { useState, useEffect } from 'react';
import Photographer from'../../images/photographer.jpg'
import Aside from '../../component/aside/Aside'
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { Link } from 'react-router-dom';
import './About.css'

function About() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
    return (
        <>
        <h1>A propos </h1>
        <main>
            <div className='portrait'>
            <img src={Photographer} className='portraitImg' alt="photo noir et blanc d'un photographe"/>
            </div>
            <div className='presentation'>
            <p>Je suis photographe indépendant spécialisé dans la photographie de mariage,de grossesse et bébé, le reportage de famille et les couples. Plusieurs domaines d'activité de la prise de vue, mais qui sont tous à la recherche de la même finalité : l'humain, la vie et l'émotion.</p>
            <p>Passionné d’image et de photo depuis très longtemps, j’ai appris la photographie par moi-même à l’époque des boitiers Nikon F et de la pellicule argentique ! </p>
            <p>Mais au-delà de l'image sous toutes ses formes, ce qui m'a toujours attiré le plus, ce sont les gens : l'humain. La photographie, pour moi, c'est d'abord photographier des gens, en tout premier lieu. Les gens dans leur vie, avec leurs émotions. C'est vraiment ça qui m'intéresse, me passionne. D'ailleurs, les domaines de la photo que je pratique sont tous très attachés à l'humain.
                Comme photographe indépendant, j’ai beaucoup pratiqué la photographie sociale et urbaine, la photo de rue et le portrait, avec le même bonheur ! C'est par ce biais, et tout naturellement pour ainsi dire, que j'ai commencé à photographier des mariages, des grossesses, des naissances de bébés, des familles, à faire des portraits,... Toujours, parce que dans ma biographie ces prestations sont rattachées à l'humain et que c'est vraiment là où je suis le plus à l'aise.
            </p>
            </div>
            <div className='aside'>
                <Aside/>
            </div>
        </main>
        
        <article className='section'>
            <div className='title'>
                <h2>
                    <span>/</span> Le retour client de mes shooting
                </h2>
            </div>
        <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

                    return <article 
                        id='Review'
                        className={position}
                        key={id}
                    >
                        <img src={image} alt={name} className='person-img'/>
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </article>
                })}
               <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        </div>
        </article>
        
            <h2>Plus de renseignements</h2>
            <p>Venez découvrir toutes mes réalisations en visitant ma page Portfolio. 
            Pour tous rensignements, n'hésitez pas à me contacter via la  page Contact</p>
            <div className='tarifButton'>
            <button><Link to='/portfolio' className='link'>Portfolio</Link></button>
            <button><Link to='/contact' className='link'>Contact</Link></button>
            </div>
        </>
    )
}

export default About
