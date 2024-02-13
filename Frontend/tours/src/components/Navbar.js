import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Tours&Travels</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cname} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          <button>Register</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
