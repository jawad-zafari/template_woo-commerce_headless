import { useState } from "react";
import "./Footer.css";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer_grid">

        <div className="footer_col">
          <h6 className="footer_col-title">À propos</h6>
          <ul className="footer_links">
            <li><a href="#">Acceuil</a></li>
            <li><a href="#">Catalogue</a></li>
            <li><a href="#">Panier</a></li>
          </ul>
        </div>

        <div className="footer_col">
          <h6 className="footer_col-title">Besoin d'aide</h6>
          <ul className="footer_links">
            <li><a href="#">Conditions générales d'utilisation</a></li>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Nous contacter</a></li>
          </ul>
        </div>


      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Méo. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
