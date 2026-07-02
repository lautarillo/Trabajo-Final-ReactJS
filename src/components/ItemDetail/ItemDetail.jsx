import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import ItemCount from '../ItemCount/ItemCount.jsx';

export default function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [wasAdded, setWasAdded] = useState(false);
  const handleAdd = (quantity) => { addItem(item, quantity); setWasAdded(true); };

  return (
    <section className="detailLayout">
      <img className="detailImage" src={item.image} alt={item.name} />
      <div className="detailInfo">
        <p className="categoryLabel">{item.category}</p><h1>{item.name}</h1><p>{item.description}</p><strong className="detailPrice">{formatCurrency(item.price)}</strong>
        <p className={item.stock > 0 ? 'stock available' : 'stock empty'}>{item.stock > 0 ? item.stock + ' unidades disponibles' : 'Producto sin stock'}</p>
        {!wasAdded && item.stock > 0 && <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />}
        {wasAdded && <div className="actionsRow"><Link className="button" to="/cart">Terminar compra</Link><Link className="button secondary" to="/">Seguir comprando</Link></div>}
      </div>
    </section>
  );
}
