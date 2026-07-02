import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useCart } from '../../context/CartContext.jsx';
import { db } from '../../service/firebase.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';

const initialBuyer = {
  name: '',
  phone: '',
  email: ''
};

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState(initialBuyer);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setBuyer((currentBuyer) => ({
      ...currentBuyer,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart.map(({ id, name, price, quantity }) => ({
        id,
        name,
        price,
        quantity
      })),
      total: totalPrice,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);

      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('No se pudo guardar la orden:', error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section className="emptyState">
        <h1>Compra confirmada</h1>
        <p>
          Tu numero de orden es <strong>{orderId}</strong>.
        </p>
        <Link className="button" to="/">
          Volver al catalogo
        </Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="emptyState">
        <h1>No hay productos para comprar</h1>
        <p>Agrega productos al carrito antes de completar el checkout.</p>
        <Link className="button" to="/">
          Ir al catalogo
        </Link>
      </section>
    );
  }

  return (
    <section className="checkoutLayout">
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <h1>Checkout</h1>

        <label>
          Nombre
          <input
            name="name"
            value={buyer.name}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>

        <label>
          Telefono
          <input
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            required
            minLength="6"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </label>

        <button className="button" type="submit" disabled={loading}>
          {loading ? 'Confirmando...' : 'Confirmar compra'}
        </button>
      </form>

      <aside className="orderPreview">
        <h2>Resumen</h2>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity}
          </p>
        ))}

        <strong>{formatCurrency(totalPrice)}</strong>
      </aside>
    </section>
  );
}