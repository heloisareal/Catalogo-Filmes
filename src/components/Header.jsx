import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <h1> Portal Filmes</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/filmes"> Filmes</NavLink>
        </li>
        <li>
          <NavLink to="/listagenero">Gênero</NavLink>
        </li>
      </ul>
    </>
  );
}
