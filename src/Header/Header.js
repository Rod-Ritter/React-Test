import "./Header.css";
import logo from "../logo.svg";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>
                <ul className='menuHeader'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produit">Produit</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contect</Link>
                    </li>   
                </ul>
            </nav>
            <Outlet />
        </header>
        </div>
    )
};
