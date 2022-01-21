import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Aside from './component/aside/Aside'
//avoir toutes les données de l'api depuis la version 4 de strapi
//http://localhost:1337/api/bebes?populate=*
import './pages/portfolio/Portfolio.css'
import Nourrisson from './images/bebe.jpg'
function Bebe() {
  // creation du state pour les posts
      const [posts, setPosts] = useState([]);
      
      useEffect(()=>{
        const fetchData = async ()=>{
          const result = await axios(
            'http://localhost:1337/api/bebes',
          );
          setPosts(result.data);
          
        }
        fetchData();
        
         }, []);
  
    return (
            <>
            <h1>Shooting bébé</h1>
            <p>Voici les photos du shooting bébé fait avec passion et amour</p>

            {/* <ul>{()=> posts.map(item=>(
                    <li key={item.id}>
                      <p>{item.data.attributes.titre}</p>
                    </li>
                  ))}</ul> */}
            <main className='container'>
            <section className='grid-images'>
            <div className='photos-center'>
              <div>
                <article className='photo'>
                <div className='photos-center'>
               <img src={Nourrisson} alt="bebe"/>
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
               <img src={Nourrisson} alt="bebe"/>
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

export default Bebe
