import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ7leY6-a2Kfk85FwQjC-ksYlv46VNpzg',
  authDomain: 'lautarillo-reacciona.firebaseapp.com',
  projectId: 'lautarillo-reacciona',
  storageBucket: 'lautarillo-reacciona.firebasestorage.app',
  messagingSenderId: '509988032001',
  appId: '1:509988032001:web:7ea1ce90f904509f94ba00'
};
//inicializar firebase
const app = initializeApp(firebaseConfig);

//obtener la base de datos
export const db = getFirestore(app);
