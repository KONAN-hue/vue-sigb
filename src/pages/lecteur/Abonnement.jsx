import React from 'react';
import AppSidebar from '../../components/AppSidebar';

export default function Abonnement() {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 p-6 space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Mon Abonnement</h1>
        <p className="text-base md:text-lg leading-relaxed">Détails et gestion de l'abonnement.</p>
      </main>
    </div>
  );
}
