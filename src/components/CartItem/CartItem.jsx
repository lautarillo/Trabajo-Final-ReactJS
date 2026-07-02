import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';

export default function CartItem({ item }) {
  const { removeItem } = useCart();
  const subtotal = item.price * item.quantity;
  return (
    <article className="cartItem">
      <img src={item.image} alt={item.name} />
      <div><h2>{item.name}</h2><p>Cantidad: {item.quantity}</p><p>Precio unitario: {formatCurrency(item.price)}</p></div>
      <strong>{formatCurrency(subtotal)}</strong>
      <button type="button" onClick={() => removeItem(item.id)} aria-label={'Eliminar ' + item.name}><Trash2 size={18} /></button>
    </article>
  );
}
