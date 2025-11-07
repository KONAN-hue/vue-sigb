import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

export default function AdminPaiements() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6 space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Paiements (Admin)</h1>
        <p className="text-base md:text-lg leading-relaxed">Gestion des paiements côté administration.</p>
      </main>
    </div>
  );
}
