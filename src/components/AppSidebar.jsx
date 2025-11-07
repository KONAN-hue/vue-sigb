import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function AppSidebar() {
  const { user } = useAuth();
  const location = useLocation();

  // Ne pas afficher la sidebar si l'utilisateur n'est pas connecté
  if (!user?.isLoggedIn) {
    return null;
  }

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => {
    const baseClass = "block px-4 py-3 rounded-md transition-colors text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)] hover:bg-gray-50";
    const activeClass = isActive(path)
      ? "bg-[oklch(52.7%_0.154_150.069)] text-white hover:text-white hover:bg-[oklch(39.3%_0.095_152.535)]"
      : "";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-xl font-serif font-bold text-[oklch(52.7%_0.154_150.069)]">Navigation</h2>
      </div>

      <nav className="space-y-1">
        <Link to="/" className={linkClass('/')}>Accueil</Link>
        <Link to="/catalogue" className={linkClass('/catalogue')}>Catalogue</Link>
        <Link to="/recherche" className={linkClass('/recherche')}>Recherche</Link>
        <Link to="/a-propos" className={linkClass('/a-propos')}>À propos</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Espace Lecteur</h3>
          <Link to="/mes-livres" className={linkClass('/mes-livres')}>Mes Livres</Link>
          <Link to="/abonnement" className={linkClass('/abonnement')}>Mon Abonnement</Link>
          <Link to="/paiements" className={linkClass('/paiements')}>Paiements</Link>
          <Link to="/evaluations" className={linkClass('/evaluations')}>Évaluations</Link>
        </div>
      </nav>
    </aside>
  );
}

