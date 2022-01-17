import React from 'react'
import Aside from './component/aside/Aside'
import CardPhoto from './component/CardPhoto'
import Nourrisson from './images/jade.jpg'
function Bebe() {
  
    return (
            <>
            <h1>Shooting bébé</h1>
            <p>Voici les photos du shooting bébé fait avec passion et amour</p>
            <main className='container'>
            <section className='grid-images'>
                <section className='photos'>
                  <div className='photos-center'>
                  <CardPhoto
                    image={Nourrisson}
                    description = {'magnifique jade'}
                  />
                  <CardPhoto
                     image={Nourrisson}
                     description = {'magnifique jade'}
                  
                  />

                  <CardPhoto
                     image={Nourrisson}
                     description = {'magnifique jade'}
                  
                  /> 
                  <CardPhoto
                     image={Nourrisson}
                     description = {'magnifique jade'}
                  
                  /> 

                  <CardPhoto
                     image={Nourrisson}
                     description = {'magnifique jade'}
                  
                  />

                  <CardPhoto
                     image={Nourrisson}
                     description = {'magnifique jade'}
                  
                  />    
                  </div>
                </section>
            </section>
            <div className='aside'>
                  <Aside/>
            </div>
            </main>
            
            

            </>

      
    )
}

export default Bebe
