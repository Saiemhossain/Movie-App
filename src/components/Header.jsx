/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from '../assets/logo.svg'

import { useEffect} from 'react';
import { handleNavToggle } from './headerLogic';
import { Link } from 'react-router-dom';

export default function Header() {
  

  useEffect(() => {
    handleNavToggle();
  }, []);

  

  return (
    <>
      <div className="header-section">
        <header className="header wrapper">
          <div className="logo">
            {' '}
            <img src={logo} />{' '}
          </div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}> Home </Link>
                <Link to={'/all-movies'}> Movies </Link>
                <Link to={'/movie'}> Movie Details </Link>
                <Link> Contact us </Link>
              </li>
            </ul>
          </nav>

          <div className="hamburger" id="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="menu-icon open"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="menu-icon close"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </div>

          <div className="mobile-menu">
            <nav>
              <ul>
                <li>
                  <Link to={'/'}> Home </Link>
                </li>
                <li>
                  <Link to={'/all-movies'}> Movies </Link>
                </li>
                <li>
                  <Link to={'/movie'}> Movie Details </Link>
                </li>
                <li>
                  <Link> Contact us </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
