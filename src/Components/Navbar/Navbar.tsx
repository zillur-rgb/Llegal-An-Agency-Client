import { Link } from "react-router-dom";
import { MenuTypes } from "../../Types/Types";
import "../../styles/navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
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
    <>
      <div className="nav-container">
        <h1 className="logo">Llegal</h1>
        <ul className="navbar">
          {menus.map((menu) => (
            <Link key={menu.url} to={menu.url}>
              <li className="menu">{menu.name}</li>
            </Link>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          {showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          )}
          {!showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
            </svg>
          )}
        </div>
      </div>
      {showMenu && (
        <ul className="responsive-navbar">
          {menus.map((menu) => (
            <Link key={menu.url} to={menu.url}>
              <li className="menu">{menu.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
