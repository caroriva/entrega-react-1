import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#company" className="navbar__logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="#company">company</a>
          </li>
          <li>
            <a href="#products">crypto</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
        </ul>
        <div className="navbar__btns">
          <a href="#">login</a>
          <a href="#" className="btn">
            register
          </a>
        </div>
        <div className="navbar__menu">
          <IoMenu />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
