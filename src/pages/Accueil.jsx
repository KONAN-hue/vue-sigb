import React from 'react';
import AppSidebar from '../components/AppSidebar';
import { useAuth } from '../context/useAuth';

export default function Accueil() {
  const { user } = useAuth();
  
  return (
    <div className="flex">
      {user?.isLoggedIn && <AppSidebar />}
      <main className="flex-1">
        {/* Bannière avec image de livres */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Bibliothèque avec livres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Bienvenue au SIGB
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Votre bibliothèque numérique à portée de main
              </p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-6 md:p-8 lg:p-12 space-y-12">
          {/* Section Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Découvrez notre collection</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Bienvenue dans notre bibliothèque numérique moderne ! Nous proposons une vaste sélection de livres physiques et ebooks 
              pour tous les goûts. Que vous soyez passionné de romans, de sciences, d'histoire ou de développement personnel, 
              vous trouverez votre bonheur dans notre catalogue riche de milliers d'ouvrages.
            </p>
          </section>

          {/* Section Services */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Livres Physiques</h3>
                <p className="text-gray-700">
                  Empruntez des livres physiques et profitez de la lecture traditionnelle. 
                  Retrait et retour dans nos points de collecte.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Ebooks</h3>
                <p className="text-gray-700">
                  Accédez à notre bibliothèque numérique avec des milliers d'ebooks disponibles 
                  instantanément sur tous vos appareils.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Recherche Avancée</h3>
                <p className="text-gray-700">
                  Trouvez rapidement le livre idéal grâce à notre moteur de recherche 
                  puissant avec filtres par genre, auteur, date, etc.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Avis & Évaluations</h3>
                <p className="text-gray-700">
                  Consultez les avis des autres lecteurs et partagez vos propres 
                  évaluations pour aider la communauté.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Abonnements Flexibles</h3>
                <p className="text-gray-700">
                  Choisissez parmi nos différents forfaits d'abonnement adaptés 
                  à vos besoins de lecture.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-serif font-semibold mb-2">Réservations</h3>
                <p className="text-gray-700">
                  Réservez les livres les plus populaires à l'avance et soyez 
                  notifié dès leur disponibilité.
                </p>
              </div>
            </div>
          </section>

          {/* Section Catégories Populaires */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Catégories Populaires</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-6 rounded-lg text-center shadow-md">
                <h3 className="font-semibold">Romans</h3>
                <p className="text-sm mt-2 opacity-90">Fiction & Littérature</p>
              </div>
              <div className="bg-gradient-to-br from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-6 rounded-lg text-center shadow-md">
                <h3 className="font-semibold">Sciences</h3>
                <p className="text-sm mt-2 opacity-90">Technologie & Recherche</p>
              </div>
              <div className="bg-gradient-to-br from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-6 rounded-lg text-center shadow-md">
                <h3 className="font-semibold">Histoire</h3>
                <p className="text-sm mt-2 opacity-90">Documentaires & Biographies</p>
              </div>
              <div className="bg-gradient-to-br from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-6 rounded-lg text-center shadow-md">
                <h3 className="font-semibold">Développement</h3>
                <p className="text-sm mt-2 opacity-90">Personnel & Professionnel</p>
              </div>
            </div>
          </section>

          {/* Section CTA */}
          <section className="bg-gradient-to-r from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Prêt à commencer votre aventure littéraire ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Rejoignez notre communauté de lecteurs passionnés et accédez à des milliers de livres dès aujourd'hui.
            </p>
            {!user?.isLoggedIn && (
              <a 
                href="/login" 
                className="inline-block bg-white text-[oklch(52.7%_0.154_150.069)] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Créer un compte gratuit
              </a>
            )}
          </section>
        </div>
    </main>
    </div>
  );
}
