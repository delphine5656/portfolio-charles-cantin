import React, {useEffect, useState} from 'react'


function CardPhoto(props) {

     //création du state chargement
       
         // creation du state pour les posts
     const [post, setPost] = useState([])

         //appel dela fonction useEffect pour faire appel à l'api de strapi
         useEffect(()=>{
          fetch('http://localhost:1337/api/posts',
          {
              method: "GET",
              headers: {
                  'Accept': 'Application/json'
              }
          }) 
          
          .then(res => res.json())
          .then(data => { 
            data.map(post => 
                  <h4>{post.data}</h4>
              )
            
          }
            )
            .catch(error => console.log(error));
         },[])
    return (
        <div>
            <article className='photo'>
            <div className='photos-center'> 
                <img src={props.image} alt='photo de charles cantin'/>
                <div className='photo-info'>
                    <h4>{post}</h4>
                    <h4 >{props.description}</h4>
                </div>

            </div>
            </article>
        </div>
    )
}

export default CardPhoto
