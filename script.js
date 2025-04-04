// Importações
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDccrHjrRd_J6v0KE-qm-kY0xfNdFRx2Kk",
  authDomain: "charadas-c383c.firebaseapp.com",
  projectId: "charadas-c383c",
  storageBucket: "charadas-c383c.firebasestorage.app",
  messagingSenderId: "1042345583228",
  appId: "1:1042345583228:web:1f5ff1e5fa2f24bf2d9ff9"
};

// Inicializa o Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Charadas
const riddles = [
  { question: "O que tem dentes mas não morde?", answer: "pente" },
  { question: "O que quanto mais seca, mais molhada fica?", answer: "toalha" },
  { question: "O que é, o que é: tem escamas mas não é peixe, tem coroa mas não é rei?", answer: "abacaxi" },
  { question: "O que é, o que é: quanto mais se tira, maior fica?", answer: "buraco" },
  { question: "O que é, o que é: tem folhas sem ser árvore, tem capa mas não é gente?", answer: "livro" },
  { question: "O que é, o que é: tem cabeça, tem dente, mas não é bicho nem gente?", answer: "alho" },
  { question: "O que é, o que é: anda sempre com os pés na cabeça?", answer: "piolho" },
  { question: "O que é, o que é: fica no meio do ovo?", answer: "letra v" },
  { question: "O que é, o que é: tem coroa mas não é rei, tem escamas mas não é peixe?", answer: "abacaxi" },
  { question: "O que é, o que é: tem pernas mas não anda, tem braços mas não abraça?", answer: "cadeira" }
];

// Função para salvar as charadas
async function salvarCharadasNoFirestore() {
  try {
    for (const riddle of riddles) {
      const docRef = await addDoc(collection(db, "charadas"), {
        pergunta: riddle.question,
        resposta: riddle.answer
      });
      console.log("Charada salva com ID:", docRef.id);
    }
  } catch (e) {
    console.error("Erro ao adicionar charada: ", e);
  }
}

// Chame essa função uma vez pra salvar as charadas
salvarCharadasNoFirestore();
