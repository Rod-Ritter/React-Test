import React from 'react';
import './Nav.css'
import { Outlet,Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
        <ul className='menuHeader'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/produit">Produit</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li> 
            <li>
                <Link to="/posts">Posts</Link>
            </li>   
        </ul>
        <Outlet />
    </nav>
    );
}