// import React, { createContext, useEffect, useState } from 'react';
// import * as authService from '../services/authService';

// export const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   // hydratation depuis localStorage
//   const [user, setUser] = useState(() => {
//     try {
//       const raw = localStorage.getItem('auth');
//       if (!raw) return null;
//       const parsed = JSON.parse(raw);
//       return parsed.user || null;
//     } catch {
//       return null;
//     }
//   });

//   const [token, setToken] = useState(() => {
//     try {
//       const raw = localStorage.getItem('auth');
//       if (!raw) return null;
//       const parsed = JSON.parse(raw);
//       return parsed.token || null;
//     } catch {
//       return null;
//     }
//   });

//   useEffect(() => {
//     // set Authorization header globally if token exists (optional)
//     if (token) {
//       // nothing global here — fetch will set headers per request in service
//     }
//   }, [token]);

//   async function login({ email, motDePasse }) {
//     // appelle le backend
//     const data = await authService.login(email, motDePasse);
//     // data attendu: { user: { nom, prenoms, email, role }, token: '...' }
//     const u = {
//       nom: data.user.nom,
//       prenoms: data.user.prenoms,
//       email: data.user.email,
//       motDePasse: data.user.motDePasse,
//       role: data.user.role || 'Lecteur',
//       isLoggedIn: true
//     };
//     console.log('Login - données utilisateur:', u);
//     setUser(u);
//     setToken(data.token);
//     localStorage.setItem('auth', JSON.stringify({ user: u, token: data.token }));
//     return u;
//   }

//   async function register({ nom, prenoms, email, motDePasse, password, mot_de_passe, role, status }) {
//     console.log('Register - données reçues:', { nom, prenoms, email, motDePasse, password, mot_de_passe, role, status });
//     const data = await authService.register({ nom, prenoms, email, motDePasse, password, mot_de_passe, role, status });
//     console.log('Register - réponse API:', data);
    
//     const u = {
//       nom: data.user.nom,
//       prenoms: data.user.prenoms,
//       motDePasse: data.user.motDePasse,
//       email: data.user.email,
//       role: data.user.role || role,
//       status: data.user.status || status,
//       isLoggedIn: true,
//     };
//     console.log('Register - données utilisateur finales:', u);
//     setUser(u);
//     setToken(data.token);
//     localStorage.setItem('auth', JSON.stringify({ user: u, token: data.token }));
//     return u;
//   }

//   function logout() {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('auth');
//     // Optionally inform backend about logout if using server sessions
//   }

//   return (
//     <AuthContext.Provider value={{ user, token, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Note: `useAuth` hook is provided from `src/context/useAuth.jsx` to avoid fast-refresh issues


import React, { createContext, useEffect, useState } from 'react';
import * as authService from '../services/authService';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('auth');
      if (!raw) return null;
      return JSON.parse(raw).user || null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      const raw = localStorage.getItem('auth');
      if (!raw) return null;
      return JSON.parse(raw).token || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // rien à faire ici
  }, [token]);

  // ✅ LOGIN CORRIGÉ
  async function login({ email, motDePasse }) {
    const response = await authService.login(email, motDePasse);

    // ✅ Laravel renvoie ceci
    // { user: {...}, token: '...' }
    const data = response.data;     

    const u = {
      nom: data.user.nom,
      prenoms: data.user.prenoms,
      email: data.user.email,
      role: data.user.role,
      status: data.user.status,
      isLoggedIn: true
    };

    setUser(u);
    setToken(data.token);
    localStorage.setItem('auth', JSON.stringify({ user: u, token: data.token }));

    return u;
  }

  // ✅ REGISTER 100% CORRIGÉ
  async function register({ nom, prenoms, email, motDePasse, role, status }) {
    const response = await authService.register({ nom, prenoms, email, motDePasse, role, status });

    // ✅ Laravel renvoie :
    // { user: {...}, token: '...' }
    const data = response.data;

    const u = {
      nom: data.user.nom,
      prenoms: data.user.prenoms,
      email: data.user.email,
      role: data.user.role,
      status: data.user.status,
      isLoggedIn: true
    };

    setUser(u);
    setToken(data.token);
    localStorage.setItem('auth', JSON.stringify({ user: u, token: data.token }));

    return u;
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth');
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
