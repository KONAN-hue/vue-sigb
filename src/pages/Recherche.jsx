import React from 'react';
import AppSidebar from '../components/AppSidebar';
import { useAuth } from '../context/useAuth';

export default function Recherche() {
  const { user } = useAuth();
  
  return (
    <div className="flex">
      {user?.isLoggedIn && <AppSidebar />}
      <main className="flex-1">
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Recherche de livres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Recherche
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Trouvez le livre parfait
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-12 space-y-8">
          {/* Formulaire de recherche avancée */}
          <section className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-6">Recherche Avancée</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mots-clés
                </label>
                <input
                  type="text"
                  placeholder="Titre, auteur, ISBN, mots-clés..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genre
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                    <option>Tous les genres</option>
                    <option>Romans</option>
                    <option>Sciences</option>
                    <option>Histoire</option>
                    <option>Développement personnel</option>
                    <option>Biographies</option>
                    <option>Fantasy</option>
                    <option>Science-fiction</option>
                    <option>Thriller</option>
                    <option>Policier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Format
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                    <option>Tous les formats</option>
                    <option>Livre physique</option>
                    <option>Ebook</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Langue
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                    <option>Toutes les langues</option>
                    <option>Français</option>
                    <option>Anglais</option>
                    <option>Espagnol</option>
                    <option>Allemand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Année de publication
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="De"
                      min="1900"
                      max="2024"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                    />
                    <input
                      type="number"
                      placeholder="À"
                      min="1900"
                      max="2024"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note minimum
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]">
                  <option>Toutes les notes</option>
                  <option>4.5 étoiles et plus</option>
                  <option>4.0 étoiles et plus</option>
                  <option>3.5 étoiles et plus</option>
                  <option>3.0 étoiles et plus</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[oklch(52.7%_0.154_150.069)] text-white rounded-md font-semibold hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors"
                >
                  Rechercher
                </button>
                <button
                  type="reset"
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-gray-300 transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </section>

          {/* Conseils de recherche */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-serif font-semibold mb-4">💡 Conseils de recherche</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Utilisez des guillemets pour rechercher une phrase exacte : "Le Petit Prince"</li>
              <li>• Combinez plusieurs critères pour affiner votre recherche</li>
              <li>• Utilisez l'ISBN pour trouver un livre spécifique</li>
              <li>• Les recherches sont insensibles à la casse</li>
            </ul>
          </section>
        </div>
    </main>
    </div>
  );
}
