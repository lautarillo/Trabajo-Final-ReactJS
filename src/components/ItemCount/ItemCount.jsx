import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const decrease = () => setQuantity((currentQuantity) => Math.max(initial, currentQuantity - 1));
  const increase = () => setQuantity((currentQuantity) => Math.min(stock, currentQuantity + 1));
  const isInvalid = stock <= 0 || quantity < initial || quantity > stock;

  return (
    <div className="counterBox">
      <div className="counterControls">
        <button type="button" onClick={decrease} disabled={quantity <= initial} aria-label="Restar unidad"><Minus size={18} /></button>
        <span>{quantity}</span>
        <button type="button" onClick={increase} disabled={quantity >= stock} aria-label="Sumar unidad"><Plus size={18} /></button>
      </div>
      <button className="button" type="button" disabled={isInvalid} onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  );
}
