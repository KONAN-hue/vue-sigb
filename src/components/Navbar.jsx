import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import NavigationToggle from "./NavigationToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigationLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/recherche', label: 'Recherche' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-white shadow-md'
    }`}>
      <Link 
        to={user?.isLoggedIn && user.role === "Lecteur" ? "/mes-livres" : "/"}
        className="text-xl font-bold text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]"
      >
        SIGB
      </Link>

      {isMobile ? (
        <>
          <NavigationToggle />
          {/* <ul className="flex space-x-4 items-center">
            {navigationLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            </ul> */}
          </>
      ) : (
        <ul className="flex space-x-4 items-center">
          {navigationLinks.map(link => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {!user?.isLoggedIn ? (
            <li>
              <Link to="/login" className="font-medium text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">
                Se connecter
              </Link>
            </li>
          ) : (
            <>
              <li className="font-medium">Bonjour, {user.nom}</li>
              <li>
                <button onClick={handleLogout} className="text-sm px-3 py-1 bg-gray-200 rounded">Se déconnecter</button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
