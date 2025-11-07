import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">À propos</h3>
            <p className="text-sm leading-relaxed mb-4">
              SIGB est votre bibliothèque numérique moderne, offrant des milliers de livres physiques 
              et ebooks pour tous les goûts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">📷</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/recherche" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Recherche
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[oklch(52.7%_0.154_150.069)] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 contact@sigb.fr</li>
              <li>📞 +33 1 23 45 67 89</li>
              <li>📍 123 Avenue de la Bibliothèque<br />75001 Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SIGB. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

