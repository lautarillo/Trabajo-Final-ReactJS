import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase.jsx';

export const categories = [
  { id: 'perifericos', label: 'Perifericos' },
  { id: 'monitores', label: 'Monitores' },
  { id: 'computadoras', label: 'Computadoras' },
  { id: 'setup', label: 'Setup' },
  { id: 'armado', label: 'Armado' }
];

export const getProducts = async (categoryId) => {
  const productsRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products');

  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data()
  }));
};

export const getProductById = async (itemId) => {
  const productRef = doc(db, 'products', itemId);
  const snapshot = await getDoc(productRef);

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }

  return null;
};