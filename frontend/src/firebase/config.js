import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV9zV7QXyw4lpLIxo0raI5un-3viAM8lw",
  authDomain: "cardapio-d607f.firebaseapp.com",
  projectId: "cardapio-d607f",
  storageBucket: "cardapio-d607f.appspot.com", // corrigido
  messagingSenderId: "909409513921",
  appId: "1:909409513921:web:28c3a819d1220a5d8abf40",
  measurementId: "G-DQYJBNLQ3E"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Serviços
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };


// como era import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyBV9zV7QXyw4lpLIxo0raI5un-3viAM8lw",
//   authDomain: "cardapio-d607f.firebaseapp.com",
//   projectId: "cardapio-d607f",
//   storageBucket: "cardapio-d607f.firebasestorage.app",
//   messagingSenderId: "909409513921",
//   appId: "1:909409513921:web:28c3a819d1220a5d8abf40",
//   measurementId: "G-DQYJBNLQ3E"
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// const db = getFirestore(app);

// const auth = getAuth(app);

// export { db, auth }