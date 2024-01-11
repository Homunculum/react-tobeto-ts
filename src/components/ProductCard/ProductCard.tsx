// ProductCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/reducers/cartReducer";

type Props = {
  product: ProductModel;
  title?: string;
};

const ProductCard: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart(props.product));
  };

  const removeProductFromCart = () => {
    dispatch(removeFromCart(props.product.id));
  };

  return (
    <div className="card mb-3" style={{ marginBottom: '10px', marginTop: '10px', height: '100%' }}>
      <img
        src={props.product.thumbnail}
        className="card-img-top img-fluid"
        alt="..."
        style={{ objectFit: 'cover', height: '50%' }}
      />
      <div className="card-body d-flex flex-column h-100">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <div className="mt-auto">
          <Link
            className="btn btn-success"
            to={`/products/${props.product.id}`}  // Use template literal to include the product ID
            role="button"
          >
            Detail
          </Link>
          <button onClick={addProductToCart} className="btn btn-primary">
          Sepete Ekle
        </button>
        <button onClick={removeProductFromCart} className="btn btn-danger">
          Sepetten Sil
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
