// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDccrHjrRd_J6v0KE-qm-kY0xfNdFRx2Kk",
  authDomain: "charadas-c383c.firebaseapp.com",
  projectId: "charadas-c383c",
  storageBucket: "charadas-c383c.firebasestorage.app",
  messagingSenderId: "1042345583228",
  appId: "1:1042345583228:web:1f5ff1e5fa2f24bf2d9ff9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para carregar charadas do Firestore
export async function carregarCharadasDoFirebase() {
  try {
    const snapshot = await getDocs(collection(db, "charadas"));
    return snapshot.docs.map(doc => ({
      question: doc.data().pergunta,
      answer: doc.data().resposta
    }));
  } catch (error) {
    console.error("Erro ao carregar charadas:", error);
    return [];
  }
}
