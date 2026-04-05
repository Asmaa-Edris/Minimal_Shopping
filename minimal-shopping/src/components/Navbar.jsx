import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { HiOutlineUser } from 'react-icons/hi2';  

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
                    <HiOutlineUser size= {22}/>
                </Link>
            </div>
        </nav>
    );
}