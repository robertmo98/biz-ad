import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="nav-link active text-white">
          <i className="bi bi-bag me-3"></i>
          BizAd
        </Link>

        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <Link to="/Services" className="nav-link active">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link active">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
