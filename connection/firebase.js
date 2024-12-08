const admin = require('firebase-admin');
const serviceAccount = require('./database/teste-ai-app-120ae-firebase-adminsdk-xgxvr-c20bb5b971.json');

// Inicializar o Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'https://firestore.googleapis.com/v1/projects/teste-ai-app-120ae/databases/(default)/documents',
  // Substitua pelo URL do banco de dados do Firebase
});

const db = admin.firestore(); // Para Firestore
// const realtimeDb = admin.database(); // Para Realtime Database (opcional)

module.exports = { admin, db };
