import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Si tu utilises React Router
import { useAuth } from "../context/useAuth";
import NavigationToggle from "./NavigationToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-white shadow-md'
    }`}>
      <Link to="/" className="text-xl font-bold text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">SIGB</Link>

      <ul className="flex space-x-4 items-center">
        {user?.isLoggedIn && (
          <>
            <li><Link to="/" className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Accueil</Link></li>
            <li><Link to="/catalogue" className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Catalogue</Link></li>
          </>
        )}

        {user?.isLoggedIn && user.role === "Lecteur" && (
          <>
            <li><Link to="/mes-livres" className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Mes Livres</Link></li>
            <li><Link to="/abonnement" className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Mon Abonnement</Link></li>
          </>
        )}

        {(user?.role === "bibliothecaire" || user?.role === 'admin') && (
          <li><Link to="/admin/dashboard" className="text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Administration</Link></li>
        )}

        {!user?.isLoggedIn ? (
          <>
            <NavigationToggle />
            <li><Link to="/login" className="font-medium text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]">Se connecter</Link></li>
          </>
        ) : (
          <>
            <li className="font-medium">Bonjour, {user.nom}</li>
            <li>
              <button onClick={handleLogout} className="text-sm px-3 py-1 bg-gray-200 rounded">Se déconnecter</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
