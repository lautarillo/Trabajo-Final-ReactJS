import Item from '../Item/Item.jsx';

export default function ItemList({ items }) {
  if (items.length === 0) return <p className="status">No hay productos disponibles en esta categoria.</p>;
  return <div className="itemGrid">
    {items.map((item) => <Item key={item.id} item={item} />)}
  </div>;
}
