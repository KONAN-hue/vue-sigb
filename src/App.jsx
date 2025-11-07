import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";

import Accueil from "./pages/Accueil";
import Catalogue from "./pages/Catalogue";
import Recherche from "./pages/Recherche";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

import MesLivres from "./pages/MesLivres";
import Abonnement from "./pages/Abonnement";
import Paiements from "./pages/Paiements";
import Evaluations from "./pages/Evaluations";

import AdminLivres from "./pages/AdminLivres";
import AdminReservations from "./pages/AdminReservations";
import AdminUtilisateurs from "./pages/AdminUtilisateurs";
import AdminRapports from "./pages/AdminRapports";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoles from "./pages/AdminRoles";
import AdminPaiements from "./pages/AdminPaiements";
import Login from "./pages/Login";

import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="font-sans leading-relaxed text-[oklch(43%_0.03_260)] flex flex-col min-h-screen">
          <Navbar />
          <div className="pt-20 flex-1">
            <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          {/* Lecteur-only routes */}
          <Route
            path="/mes-livres"
            element={
              <RequireAuth allowedRoles={["Lecteur"]}>
                <MesLivres />
              </RequireAuth>
            }
          />
          <Route
            path="/abonnement"
            element={
              <RequireAuth allowedRoles={["Lecteur"]}>
                <Abonnement />
              </RequireAuth>
            }
          />
          <Route
            path="/paiements"
            element={
              <RequireAuth allowedRoles={["Lecteur"]}>
                <Paiements />
              </RequireAuth>
            }
          />
          <Route
            path="/evaluations"
            element={
              <RequireAuth allowedRoles={["Lecteur"]}>
                <Evaluations />
              </RequireAuth>
            }
          />

          {/* Admin / Bibliothecaire routes */}
          <Route
            path="/admin/livres"
            element={
              <RequireAuth allowedRoles={["bibliothecaire", "admin"]}>
                <AdminLivres />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/reservations"
            element={
              <RequireAuth allowedRoles={["bibliothecaire", "admin"]}>
                <AdminReservations />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/utilisateurs"
            element={
              <RequireAuth allowedRoles={["bibliothecaire", "admin"]}>
                <AdminUtilisateurs />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/rapports"
            element={
              <RequireAuth allowedRoles={["bibliothecaire", "admin"]}>
                <AdminRapports />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth allowedRoles={["admin", "bibliothecaire"]}>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/roles"
            element={
              <RequireAuth allowedRoles={["admin"]}>
                <AdminRoles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/paiements"
            element={
              <RequireAuth allowedRoles={["admin", "bibliothecaire"]}>
                <AdminPaiements />
              </RequireAuth>
            }
          />

          <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
