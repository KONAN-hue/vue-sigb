import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Login() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [nom, setNom] = useState('');
  const [prenoms, setPrenoms] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setmotDePasse] = useState('');
  const [role, setRole] = useState('Lecteur');
  const [status] = useState('active');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const redirectByRole = (r) => {
    if (r === 'Lecteur') navigate('/mes-livres');
    else navigate('/admin/dashboard');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Style pour les logs
    const logStyles = {
      input: 'background: #2563eb; color: white; padding: 2px 5px; border-radius: 2px;',
      success: 'background: #059669; color: white; padding: 2px 5px; border-radius: 2px;',
      error: 'background: #dc2626; color: white; padding: 2px 5px; border-radius: 2px;',
    };

    console.log('%c📝 DONNÉES SAISIES', logStyles.input, {
      mode,
      nom: nom || '(vide)',
      prenoms: prenoms || '(vide)',
      email,
      motDePasse: motDePasse ? '********' : '(vide)',
      role,
      status
    });

    try {
      if (mode === 'login') {
        console.log('%c🔑 TENTATIVE CONNEXION', logStyles.input, { email });
        const u = await login({ email, motDePasse });
        console.log('%c✅ CONNEXION RÉUSSIE', logStyles.success, u);
        redirectByRole(u.role);
      } else {
        // Validation côté client
        if (!nom || !prenoms) {
          console.log('%c❌ VALIDATION ÉCHOUÉE', logStyles.error, { nom, prenoms });
          setError('Le nom et le prénom sont requis');
          setLoading(false);
          return;
        }
        
        // Log détaillé des données avant l'envoi
        const registerData = {
          nom: nom,
          prenoms: prenoms,
          email: email,
          motDePasse: motDePasse,
          password: motDePasse,
          mot_de_passe: motDePasse,
          role: role,
          status: status
        };

        console.group('%c📤 DONNÉES AVANT ENVOI', logStyles.input);
        console.log('Nom:', nom);
        console.log('Prénoms:', prenoms);
        console.log('Email:', email);
        // console.log('motDePasse:', '********');
        console.log('motDePasse:', motDePasse);
        console.log('Role:', role);
        console.log('Status:', status);
        console.log('Objet complet:', registerData);
        console.groupEnd();

        const u = await register(registerData);
        console.log('%c✅ RÉPONSE API', logStyles.success, u);
        redirectByRole(u.role);
      }
    } catch (err) {
      // Gestion des erreurs de validation Laravel
      if (err.errors) {
        // Si on a des erreurs de validation Laravel
        const messages = Object.values(err.errors).flat();
        setError(messages.join('\n'));
      } else {
        // Erreur générique ou réseau
        setError(err?.message || 'Erreur réseau');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">{mode === 'login' ? 'Connexion' : "Inscription"}</h1>

      {error && <div className="mb-4 text-red-600">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <>
            <div>
              <label className="block mb-1">Nom</label>
              <input
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value);
                  console.log('Nom mis à jour:', e.target.value);
                }}
                className="w-full border px-3 py-2 rounded"
                placeholder="ex: Dupont"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Prénoms</label>
              <input
                value={prenoms}
                onChange={(e) => {
                  setPrenoms(e.target.value);
                  console.log('Prénom mis à jour:', e.target.value);
                }}
                className="w-full border px-3 py-2 rounded"
                placeholder="ex: Alice"
                required
              />
            </div>
            <input type="hidden" name="status" value={status} readOnly />
          </>
        )}

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="ex: alice@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Mot de passe</label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setmotDePasse(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="********"
            required
          />
        </div>

        {mode === 'register' && (
          <div>
            <label className="block mb-1">Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border px-3 py-2 rounded">
              <option value="Lecteur">Lecteur</option>
              <option value="bibliothecaire">Bibliothécaire</option>
            </select>
          </div>
        )}

        <div>
          <button disabled={loading} className="text-white px-4 py-2 rounded bg-[oklch(52.7%_0.154_150.069)] hover:bg-[oklch(39.3%_0.095_152.535)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(52.7%_0.154_150.069)]">
            {loading ? 'Veuillez patienter...' : mode === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>
        </div>
      </form>

      <div className="mt-4 text-sm">
        {mode === 'login' ? (
          <>
            Vous n'avez pas de compte ?{' '}
            <button className="underline underline-offset-2 text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]" onClick={() => setMode('register')}>S'inscrire</button>
          </>
        ) : (
          <>
            Déjà inscrit ?{' '}
            <button className="underline underline-offset-2 text-[oklch(52.7%_0.154_150.069)] hover:text-[oklch(39.3%_0.095_152.535)]" onClick={() => setMode('login')}>Se connecter</button>
          </>
        )}
      </div>
    </main>
  );
}
