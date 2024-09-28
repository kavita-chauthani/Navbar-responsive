import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h1>kavita chauthani</h1>
            </div>
            <nav className={showMenu ? "mobile-menu" : "menu-web"}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kavitachauthani/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="ham-menu">
              <button onClick={handleButton}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
