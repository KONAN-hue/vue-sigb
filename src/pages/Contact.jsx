import React from 'react';
import AppSidebar from '../components/AppSidebar';
import { useAuth } from '../context/useAuth';

export default function Contact() {
  const { user } = useAuth();
  
  return (
    <div className="flex">
      {user?.isLoggedIn && <AppSidebar />}
      <main className="flex-1">
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Espace de lecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Contact
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Nous sommes là pour vous aider
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire de contact */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Envoyez-nous un message</h2>
              <form className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option>Question générale</option>
                    <option>Problème technique</option>
                    <option>Demande d'information</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(52.7%_0.154_150.069)]"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[oklch(52.7%_0.154_150.069)] text-white rounded-md font-semibold hover:bg-[oklch(39.3%_0.095_152.535)] transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </section>

            {/* Informations de contact */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    Adresse
                  </h3>
                  <p className="text-gray-700">
                    123 Avenue de la Bibliothèque<br />
                    75001 Paris, France
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    Téléphone
                  </h3>
                  <p className="text-gray-700">
                    +33 1 23 45 67 89<br />
                    Du lundi au vendredi : 9h - 18h
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">✉️</span>
                    Email
                  </h3>
                  <p className="text-gray-700">
                    contact@sigb.fr<br />
                    support@sigb.fr
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕒</span>
                    Horaires
                  </h3>
                  <p className="text-gray-700">
                    <strong>Bibliothèque physique :</strong><br />
                    Lundi - Vendredi : 9h - 19h<br />
                    Samedi : 10h - 18h<br />
                    Dimanche : Fermé<br /><br />
                    <strong>Support en ligne :</strong><br />
                    24h/24 et 7j/7
                  </p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-r from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl hover:opacity-80 transition-opacity">📘</a>
                  <a href="#" className="text-2xl hover:opacity-80 transition-opacity">🐦</a>
                  <a href="#" className="text-2xl hover:opacity-80 transition-opacity">📷</a>
                  <a href="#" className="text-2xl hover:opacity-80 transition-opacity">💼</a>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ rapide */}
          <section className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-6">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Comment créer un compte ?</h3>
                <p className="text-gray-700 text-sm">
                  Cliquez sur "Se connecter" dans le menu, puis sur "S'inscrire". 
                  Remplissez le formulaire et validez votre email.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quels sont les tarifs d'abonnement ?</h3>
                <p className="text-gray-700 text-sm">
                  Nous proposons plusieurs forfaits adaptés à vos besoins. 
                  Consultez la page "Mon Abonnement" une fois connecté pour voir les détails.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Puis-je emprunter des livres physiques ?</h3>
                <p className="text-gray-700 text-sm">
                  Oui, vous pouvez emprunter des livres physiques et les retirer dans nos points de collecte. 
                  Les ebooks sont disponibles instantanément en ligne.
                </p>
              </div>
            </div>
          </section>
        </div>
    </main>
    </div>
  );
}
