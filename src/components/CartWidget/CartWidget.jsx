import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

export default function CartWidget() {
  const { totalQuantity } = useCart();
  return <Link className="cartWidget" to="/cart" aria-label="Ver carrito"><ShoppingCart size={22} />{totalQuantity > 0 && <span>{totalQuantity}</span>}</Link>;
}
