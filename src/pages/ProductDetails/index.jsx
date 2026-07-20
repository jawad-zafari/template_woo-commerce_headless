// Importation du fichier de style
import "./ProductDetails.scss";
import React, { useEffect } from "react";
// Ajout de useNavigate pour le bouton de retour
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
// Importation de l'action
import { fetchProductByIdThunk } from "../../thunkActionsCreator/productsThunks";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // Initialisation de l'outil de navigation
  const navigate = useNavigate(); 

  const { singleProduct, loadingSingle, errorSingle } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdThunk(id));
    }
  }, [id, dispatch]);

  if (loadingSingle) {
    return <div className="loading-state">Chargement en cours...</div>;
  }

  if (errorSingle) {
    return <div className="error-state">Une erreur est survenue: {errorSingle}</div>;
  }

  if (!singleProduct) {
    return <div className="not-found-state">Aucun produit trouvé.</div>;
  }

  return (
    <div className="product-page-wrapper">
      
      {/* Bouton de retour */}
      <button className="back-to-store-btn" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i> Retour
      </button>

      <div className="product-top-block">
        
        <div className="image-left-side">
          {singleProduct.images && singleProduct.images[1] && (
            <img 
              src={singleProduct.images[1].src} 
              alt={singleProduct.images[1].alt || singleProduct.name} 
            />
          )}
          <span className="wishlist-heart-decorative">♡</span>
        </div>

        <div className="main-info-container">
          <h1>{singleProduct.name}</h1>
          
          <p className="product-price">
            {singleProduct.prices?.price 
              ? `${(parseFloat(singleProduct.prices.price) / 100).toFixed(2)} ${singleProduct.prices.currency_code || 'EUR'}`
              : "Prix non disponible"}
          </p>

          <div 
            className="short-description-box"
            dangerouslySetInnerHTML={{ __html: singleProduct.short_description || "<p>Aucune introduction disponible.</p>" }}
          />

          <button className="add-to-cart-btn">
            <i className="fas fa-shopping-cart cart-btn-icon"></i>
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* SECTION BASSE : Les articles venant directement de WooCommerce */}
      <div className="product-bottom-block">
        <div className="details-content-row">
          <div 
            className="text-left-side wordpress-content" 
            dangerouslySetInnerHTML={{ __html: singleProduct.description || "<p>Aucune description disponible.</p>" }} 
          />
        </div>
      </div>

    </div>
  );
}