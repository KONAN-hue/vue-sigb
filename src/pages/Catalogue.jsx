import React from 'react';
import AppSidebar from '../components/AppSidebar';
import { useAuth } from '../context/useAuth';

export default function Catalogue() {
  const { user } = useAuth();
  
  return (
    <div className="flex">
      {user?.isLoggedIn && <AppSidebar />}
      <main className="flex-1">
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Collection de livres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Catalogue
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Explorez notre collection complète
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-12 space-y-8">
          {/* Filtres et recherche */}
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Rechercher un livre, un auteur..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                <option>Tous les genres</option>
                <option>Romans</option>
                <option>Sciences</option>
                <option>Histoire</option>
                <option>Développement personnel</option>
                <option>Biographies</option>
                <option>Fantasy</option>
                <option>Science-fiction</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                <option>Tous les formats</option>
                <option>Livre physique</option>
                <option>Ebook</option>
                <option>Les deux</option>
              </select>
            </div>
          </section>

          {/* Statistiques */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[oklch(52.7%_0.154_150.069)]">15,000+</div>
                <div className="text-sm text-gray-600 mt-1">Livres disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[oklch(52.7%_0.154_150.069)]">8,500+</div>
                <div className="text-sm text-gray-600 mt-1">Ebooks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[oklch(52.7%_0.154_150.069)]">2,000+</div>
                <div className="text-sm text-gray-600 mt-1">Auteurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[oklch(52.7%_0.154_150.069)]">50+</div>
                <div className="text-sm text-gray-600 mt-1">Catégories</div>
              </div>
            </div>
          </section>

          {/* Liste des livres (exemple) */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Livres Populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Exemple de carte livre */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
                <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                  Couverture du livre
                </div>
                <h3 className="font-semibold text-lg mb-2">Titre du Livre</h3>
                <p className="text-sm text-gray-600 mb-2">Par Auteur</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-[oklch(52.7%_0.154_150.069)] text-white px-2 py-1 rounded">Ebook</span>
                  <span className="text-sm text-gray-500">⭐ 4.5</span>
                </div>
                <div className="mt-auto space-y-2">
                  <div className="text-lg font-bold text-[oklch(52.7%_0.154_150.069)]">12,99 €</div>
                  <button className="w-full bg-[oklch(52.7%_0.154_150.069)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors">
                    Acheter
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
                <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                  Couverture du livre
                </div>
                <h3 className="font-semibold text-lg mb-2">Titre du Livre</h3>
                <p className="text-sm text-gray-600 mb-2">Par Auteur</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded">Physique</span>
                  <span className="text-sm text-gray-500">⭐ 4.8</span>
                </div>
                <div className="mt-auto space-y-2">
                  <div className="text-lg font-bold text-[oklch(52.7%_0.154_150.069)]">19,99 €</div>
                  <button className="w-full bg-[oklch(52.7%_0.154_150.069)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors">
                    Acheter
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
                <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                  Couverture du livre
                </div>
                <h3 className="font-semibold text-lg mb-2">Titre du Livre</h3>
                <p className="text-sm text-gray-600 mb-2">Par Auteur</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-[oklch(52.7%_0.154_150.069)] text-white px-2 py-1 rounded">Ebook</span>
                  <span className="text-sm text-gray-500">⭐ 4.2</span>
                </div>
                <div className="mt-auto space-y-2">
                  <div className="text-lg font-bold text-[oklch(52.7%_0.154_150.069)]">9,99 €</div>
                  <button className="w-full bg-[oklch(52.7%_0.154_150.069)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors">
                    Acheter
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 italic">
              * Les livres seront chargés dynamiquement depuis la base de données
            </p>
          </section>
        </div>
    </main>
    </div>
  );
}
