import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => {
    const baseClass = "block px-4 py-3 rounded-md transition-colors text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)] hover:bg-gray-50";
    const activeClass = isActive(path)
      ? "bg-[oklch(52.7%_0.154_150.069)] text-white hover:text-white hover:bg-[oklch(39.3%_0.095_152.535)]"
      : "";
    return `${baseClass} ${activeClass}`;
  };

  const navigationLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/recherche', label: 'Recherche' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md bg-[oklch(52.7%_0.154_150.069)] text-white hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 p-4">
            <div className="mb-4">
              <h2 className="text-xl font-serif font-bold text-[oklch(52.7%_0.154_150.069)]">Navigation</h2>
            </div>
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(link.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
