import { NavLink, Link } from 'react-router-dom';
import { categories } from '../../data/products.js';
import CartWidget from '../CartWidget/CartWidget.jsx';

export default function NavBar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">Lautarillo Reacciona</Link>
      <nav className="navLinks">
        <NavLink to="/">Catalogo</NavLink>
        {categories.map((category) => <NavLink key={category.id} to={'/category/' + category.id}>{category.label}</NavLink>)}
      </nav>
      <CartWidget />
    </header>
  );
}
