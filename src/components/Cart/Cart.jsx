import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import CartItem from '../CartItem/CartItem.jsx';

export default function Cart() {
  const { cart, clearCart, totalPrice } = useCart();
  if (cart.length === 0) return <section className="emptyState"><h1>Carrito vacio</h1><p>Todavia no agregaste productos.</p><Link className="button" to="/">Ir al catalogo</Link></section>;
  return (
    <section className="cartSection">
      <div className="sectionHeader compact"><h1>Carrito</h1><button className="button secondary" type="button" onClick={clearCart}>Vaciar carrito</button></div>
      <div className="cartList">{cart.map((item) => <CartItem key={item.id} item={item} />)}</div>
      <div className="cartSummary"><span>Total final</span><strong>{formatCurrency(totalPrice)}</strong><Link className="button" to="/checkout">Ir al checkout</Link></div>
    </section>
  );
}
