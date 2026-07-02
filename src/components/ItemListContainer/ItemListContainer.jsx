import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/products.js';
import ItemList from '../ItemList/ItemList.jsx';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then(setItems).finally(() => setLoading(false));
  }, [categoryId]);

  return <section className="catalogSection"><div className="sectionHeader"><p className="eyebrow">Tienda gamer</p><h1>{greeting}</h1></div>{loading ? <p className="status">Cargando productos...</p> : <ItemList items={items} />}</section>;
}
