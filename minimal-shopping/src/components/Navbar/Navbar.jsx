import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './navbar.css';
import { HiUser } from 'react-icons/hi2'; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </Link>
            </div>
            
            <div className="navbar-right">
                <Link to="/login" className="user-icon">
                    <HiUser size={24} color="#727171"/>
                </Link>
            </div>
        </nav>
    );
}