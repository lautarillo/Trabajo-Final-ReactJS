import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency.js';

export default function Item({ item }) {
  return (
    <article className="productCard">
      <img src={item.image} alt={item.name} />
      <div className="productInfo">
        <p className="categoryLabel">{item.category}</p><h2>{item.name}</h2><p>{item.description}</p>
        <div className="cardFooter"><strong>{formatCurrency(item.price)}</strong><Link className="button secondary" to={'/item/' + item.id}>Ver detalle</Link></div>
      </div>
    </article>
  );
}
