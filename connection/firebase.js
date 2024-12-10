const admin = require('firebase-admin');
const serviceAccount = require('./database/teste-ai-app-120ae-firebase-adminsdk-xgxvr-7716a26cf2.json');
const config = {
  apiKey: "AIzaSyDosbMGfVJQoHc7ZfGQ0YES0YJIxAzpC0w",
  authDomain: "teste-ai-app-120ae.firebaseapp.com",
  databaseURL: "https://teste-ai-app-120ae-default-rtdb.firebaseio.com",
  projectId: "teste-ai-app-120ae",
  storageBucket: "teste-ai-app-120ae.firebasestorage.app",
  messagingSenderId: "1007904536292",
  appId: "1:1007904536292:web:a21d8fcf94173b2dc35ef1"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teste-ai-app-120ae-default-rtdb.firebaseio.com"

});

const db = admin.firestore(); 

module.exports = { admin, db };
