import React from 'react'

const Photo = ({urls:{regular},alt_description, user:{name,location}}) => {
  return <article className='photo'>
      <img src={regular} alt={alt_description}/>
      <div className='photo-info'>
        <h4>{name}</h4>
        <h4 >{location}</h4>
      </div>
  </article>
}

export default Photo
