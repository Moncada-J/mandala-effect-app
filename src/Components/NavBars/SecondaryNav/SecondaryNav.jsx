import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../MandalaLogo/Logo.png';
import '../LandingNav/LandingNav.css';
import './SecondaryNav.css';

export default function SecondaryNav({darkMode, setDarkMode, emoji, setEmoji}) {
    return (
        <Navbar bg="light" variant="light">
			<Container>
			<Navbar.Brand className="navTitle"><img src={Logo} alt="Logo" className="navLogo"/> Mandala Effect</Navbar.Brand>
			<Nav className="me-auto">
			<Nav.Link href="" className="navLink"><Link to="/">ANIMALS</Link></Nav.Link>
			<Nav.Link href="" className="navLink"><Link to="">HOLIDAYS</Link></Nav.Link>
			<Nav.Link href="" className="navLink"><Link to="">MANDALAS</Link></Nav.Link>
			<Nav.Link>
				<button className="dark-btn" 
						onClick={() => {setEmoji(!emoji); setDarkMode(!darkMode)}}>
								{ emoji ? "☀️  " : " 🌙   " }	
						</button>
							{emoji}
			</Nav.Link>
			</Nav>
			</Container>
		</Navbar>
    );
}
