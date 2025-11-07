import React from 'react';
import AppSidebar from '../components/AppSidebar';
import { useAuth } from '../context/useAuth';

export default function APropos() {
  const { user } = useAuth();
  
  return (
    <div className="flex">
      {user?.isLoggedIn && <AppSidebar />}
      <main className="flex-1">
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Bibliothèque moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                À propos
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Découvrez notre mission
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-12 space-y-12">
          {/* Notre Histoire */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Notre Histoire</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Fondée en 2020, notre bibliothèque numérique est née d'une passion pour la lecture et d'un désir de rendre 
              la culture accessible à tous. Nous avons créé une plateforme moderne qui combine le meilleur des deux mondes : 
              les livres physiques traditionnels et les ebooks numériques innovants.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Aujourd'hui, nous sommes fiers de compter plus de 15 000 ouvrages dans notre collection et une communauté 
              grandissante de lecteurs passionnés qui partagent leur amour pour les livres.
            </p>
          </section>

          {/* Notre Mission */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Notre Mission</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Notre mission est de démocratiser l'accès à la lecture en proposant une vaste sélection de livres physiques 
              et numériques à des prix abordables. Nous croyons que la lecture est un droit fondamental et un vecteur 
              essentiel de développement personnel et culturel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="font-semibold mb-2">Accessibilité</h3>
                <p className="text-sm text-gray-600">Rendre la lecture accessible à tous</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-semibold mb-2">Diversité</h3>
                <p className="text-sm text-gray-600">Une collection riche et variée</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Technologie au service de la culture</p>
              </div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Nos Valeurs</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[oklch(52.7%_0.154_150.069)] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Excellence</h3>
                  <p className="text-gray-700">
                    Nous nous engageons à offrir une expérience de qualité supérieure à nos utilisateurs, 
                    avec un catalogue soigneusement sélectionné et un service client irréprochable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[oklch(52.7%_0.154_150.069)] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Transparence</h3>
                  <p className="text-gray-700">
                    Nous croyons en la transparence totale dans nos relations avec nos clients, 
                    avec des prix clairs et des conditions d'utilisation simples.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[oklch(52.7%_0.154_150.069)] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Communauté</h3>
                  <p className="text-gray-700">
                    Nous favorisons une communauté de lecteurs active où chacun peut partager ses avis, 
                    ses recommandations et sa passion pour les livres.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistiques */}
          <section className="bg-gradient-to-r from-[oklch(52.7%_0.154_150.069)] to-[oklch(39.3%_0.095_152.535)] text-white p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">SIGB en Chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-sm opacity-90">Livres disponibles</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-sm opacity-90">Membres actifs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Catégories</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Disponibilité</div>
              </div>
            </div>
          </section>
        </div>
    </main>
    </div>
  );
}
