import { Link } from "react-router-dom";
import { MenuTypes } from "../../Types/Types";
import "../../styles/navbar.scss";

const Navbar = () => {
  const menus: MenuTypes[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Lawyers",
      url: "/lawyers",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="nav-container">
      <h1 className="logo">Llegal</h1>
      <ul>
        {menus.map((menu) => (
          <Link key={menu.url} to={menu.url}>
            <li className="menu">{menu.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
