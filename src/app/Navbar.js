import { Link } from "react-router-dom";
import MenuListComposition from "../Templates/UserMenu"
import  UserComponent  from "../Utils/client/GetUsers";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor:"green"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Yecoom
        </a>
       <UserComponent />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Mon Compte
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newProducts">
                Vendre un produit
              </Link>
            </li>
          </ul>
         
            <MenuListComposition />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
