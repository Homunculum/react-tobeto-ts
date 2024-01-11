import React, { useContext } from "react";
import "./navbar.css"; 
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import CartBadge from "../../Cart/CartBadge";

const Navbar: React.FC = () => {
  const authContext: any = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="navbar-brand">
              <div className="logo-container">Hoşgeldiniz</div>
            </Link>
          </li>
        </ul>

        <div className="auth navbar-nav ml-auto" id="navbarText">
          <ul className="navbar-nav">
            {!authContext.isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Kayıt Ol
                  </Link>
                </li>
              </>
            )}

            {authContext.isAuthenticated && (
              <li className="nav-item">
                <Link
                  onClick={() => {
                    authContext.setIsAuthenticated(false);
                  }}
                  to="/"
                  className="nav-link"
                >
                  Çıkış Yap
                </Link>
              </li>
            )}

            {authContext.isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-product">
                  Ürün Ekle
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center float-right">
            <CartBadge />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
