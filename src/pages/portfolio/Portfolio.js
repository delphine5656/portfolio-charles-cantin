import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from '../.././component/gallery/Photo';
import Aside from '../../component/aside/Aside';

import './Portfolio.css'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function Portfolio() {
    const[loading, setLoading] = useState(false);
    const[photos, setPhotos] = useState([]);
    const[page, setPage]= useState(0);
    const [query, setQuery] = useState('');



    const fetchImages = async() =>{
        setLoading(true);
        let url;
        const urlPage= `&page=${page}`
        const urlQuery = `&query=${query}`

        if(query){
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
        }else{
            url = `${mainUrl}${clientID}${urlPage}`
        }
       
        try{
          const response = await fetch(url);
          const data = await response.json();
          setPhotos((oldPhotos)=>{
              if(query && page === 1){
                return data.results
              }
              else if(query){
                return [...oldPhotos, ...data.results]
              }else{
                return [...oldPhotos, ...data]
              }
            
          });
          setLoading(false);
        }catch(error){
            setLoading(false);
          console.log(error);
        }
    }

     const handleSubmit = (e)=>{
        e.preventDefault();
        setPage(1);
     }   


    useEffect(()=>{
      fetchImages();  
    },[page])

    // scroll event
    useEffect(()=>{
        const event = window.addEventListener('scroll',()=> {
            if(!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2){
                setPage((oldPage)=>{
                    return oldPage + 1
                })
            }
        });
        return () => window.removeEventListener('scroll', event)
    },[])
    return (
    <>
        <main className='container'>
            <section className='grid-images'>
            <section className='search'>
                <form className='search-form'>
                    <input 
                    type="text" 
                    placeholder='rechercher' 
                    className='form-input' 
                    value={query} 
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}/>
                    <button type='submit' className='submit-btn' onClick={handleSubmit}>
                        <FaSearch/>
                    </button>
                </form> 
            </section> 

            <section className='photos'>
                <div className='photos-center'> 
                    {photos.map((image,index)=>{
                        
                        return <Photo key={image.index} {...image} />
                    })}
                </div>
                {loading && <h2 className='loading'>Loading...</h2>}
            </section>
            </section>
        
            <div className='aside'>
                <Aside/>
            </div>
        </main>
    </>
    )
}

export default Portfolio
