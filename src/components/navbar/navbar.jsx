import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';


export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link 
              className="navbar-home" 
              to="/categories"
          >
            <FontAwesomeIcon icon={faHome} className="icon-navbar"/>
            Categorías
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-list">
            <li className="navbar-item">
              Bienvenido, <span className="navbar-username">{user.email}</span>
            </li>
            <li className="navbar-item">
              <button className="navbar-logout-btn" onClick={onLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon-navbar"/>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
}