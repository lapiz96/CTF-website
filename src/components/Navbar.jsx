import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 2L3 9V23L16 30L29 23V9L16 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M16 10L10 13.5V19L16 22.5L22 19V13.5L16 10Z" fill="currentColor" />
                        </svg>
                    </div>
                    <span className="logo-text">
                        CTF <span className="logo-highlight">Interstellar</span>
                    </span>
                </Link>

                <div className="navbar-menu">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Mission
                    </Link>
                    <Link
                        to="/challenges"
                        className={`nav-link ${location.pathname === '/challenges' ? 'active' : ''}`}
                    >
                        Challenges
                    </Link>
                    <Link
                        to="/scoreboard"
                        className={`nav-link ${location.pathname === '/scoreboard' ? 'active' : ''}`}
                    >
                        Scoreboard
                    </Link>
                    <Link
                        to="/mission-control"
                        className={`nav-link ${location.pathname === '/mission-control' ? 'active' : ''}`}
                    >
                        Rules
                    </Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/profile" className="btn btn-secondary">
                        Login
                    </Link>
                    <Link to="/profile" className="btn btn-primary">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
