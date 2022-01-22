import React from 'react';
import Aside from '../../component/aside/Aside'
import Bebe from '../../images/bebe.jpg'

function couple() {
  return (
    <>
    <h1>Shooting bébé</h1>
    <p>Voici les photos du shooting bébé fait avec passion et amour</p>
    <main className='container'>
    <section className='grid-images'>
    <div className='photos-center'>
      <div>
        <article className='photo'>
        <div className='photos-center'>
       <img src={Bebe} alt="bebe"/>
        <div className='photo-info'>
          <h4>jade</h4>
          <p>Contenu</p>
          </div> 
        </div>
        </article>    
      </div>
    </div>
    <div className='photos-center'>
      <div>
        <article className='photo'>
        <div className='photos-center'>
       <img src={Bebe} alt="bebe"/>
        <div className='photo-info'>
          <h4>jade</h4>
          <p>Contenu</p>
          </div> 
        </div>
        </article>    
      </div>
    </div>
    </section>
    <div className='aside'>
          <Aside/>
    </div>
    </main>
    </>


)
}

export default couple;

