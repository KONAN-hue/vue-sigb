const API_BASE_URL = 'http://127.0.0.1:8000';
const JSON_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };

export async function login(email, motDePasse) {
  const resp = await fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ email, motDePasse }),
  });

  if (!resp.ok) {
    // try to parse error message
    const err = await resp.json().catch(() => ({ message: 'Erreur lors de la connexion' }));
    throw err;
  }

  const data = await resp.json();
  // Expected response shape (example): { user: { nom, prenoms, email, role }, token: '...'}
  return data;
}

export async function register(data) {
  console.group('📡 Vérification des données reçues dans register');
  console.log('Données brutes reçues:', {
    ...data,
    motDePasse: data.motDePasse ? '********' : undefined,
    password: data.password ? '********' : undefined,
    mot_de_passe: data.mot_de_passe ? '********' : undefined
  });
  console.groupEnd();

  const requestData = {
    nom: data.nom,
    prenoms: data.prenoms,
    email: data.email,
    motDePasse: data.motDePasse,
    password: data.password || data.motDePasse,
    mot_de_passe: data.mot_de_passe || data.motDePasse,
    role: data.role || 'Lecteur',
    status: data.status || 'active'
  };
  
  console.group('📡 Appel API Register');
  console.log('URL:', `${API_BASE_URL}/api/register`);
  console.log('Méthode:', 'POST');
  console.log('Headers:', JSON_HEADERS);
  console.log('Body:', { ...requestData, motDePasse: '********', password: '********', mot_de_passe: '********' });
  console.groupEnd();
  
  const resp = await fetch(`${API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(requestData),
  });

  if (!resp.ok) {
    const error = await resp.json();
    console.group('❌ Erreur API');
    console.log('Status:', resp.status);
    console.log('Erreur:', error);
    console.groupEnd();
    // Adapte le format d'erreur Laravel à notre format
    if (error.errors) {
      throw { errors: error.errors, message: 'Erreur de validation' };
    }
    throw error;
  }

  const responseData = await resp.json();
  console.group('✅ Réponse API Success');
  console.log('Status:', resp.status);
  console.log('Data:', responseData);
  console.groupEnd();
  // Expected response shape: { user: { ... }, token: '...' }
  return responseData;
}

export function getAuthHeader(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}
