import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'

function Aside() {
    return (
            <aside>
            <h3>Catégorie</h3>
            <Link to='/Portrait'>Portrait</Link>
            <Link to='/Couple'>Couple</Link>
            <Link to='/Grossesse'>Grossesse</Link>
            <Link to='/bebe'>Bébé</Link>
            <Link to='/Famille'>Famille</Link>
            <Link to='/Mariage'>Mariage</Link>
            <Link to='/Bapteme'>Baptême</Link>
        </aside>
    )
}

export default Aside
