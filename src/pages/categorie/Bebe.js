import React  from 'react'
import Layout from '../../component/Layout'
import PostList from '../../component/PostList'
import './pages.css'

//avoir toutes les données de l'api depuis la version 4 de strapi
//http://localhost:1337/api/bebes?populate=*
//import '.././pages/portfolio/Portfolio.css'
//import Nourrisson from '../images/bebe.jpg'
function Baby() {
  // creation du state pour les posts
  
  
    return (
            <>
           <Layout>
            <PostList />
          </Layout>
            </>

      
    )
}

export default Baby
