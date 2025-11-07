import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function AdminSidebar() {
  const { user } = useAuth();
  const location = useLocation();

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
        <h2 className="text-xl font-serif font-bold text-[oklch(52.7%_0.154_150.069)]">Administration</h2>
      </div>
      
      <nav className="space-y-1">
        <Link to="/admin/dashboard" className={linkClass('/admin/dashboard')}>
          Tableau de bord
        </Link>
        
        <Link to="/admin/livres" className={linkClass('/admin/livres')}>
          Gestion des Livres
        </Link>
        
        <Link to="/admin/reservations" className={linkClass('/admin/reservations')}>
          Réservations
        </Link>
        
        <Link to="/admin/utilisateurs" className={linkClass('/admin/utilisateurs')}>
          Utilisateurs
        </Link>
        
        <Link to="/admin/rapports" className={linkClass('/admin/rapports')}>
          Rapports
        </Link>
        
        <Link to="/admin/paiements" className={linkClass('/admin/paiements')}>
          Paiements
        </Link>
        
        {user?.role === 'admin' && (
          <Link to="/admin/roles" className={linkClass('/admin/roles')}>
            Gérer les rôles
          </Link>
        )}
      </nav>
    </aside>
  );
}

