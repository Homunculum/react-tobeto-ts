import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductService from '../../services/ProductService';
import { ProductModel } from '../../models/responses/ProductModel';
import { addToCart, removeFromCart } from '../../store/reducers/cartReducer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = () => {
    let service: ProductService = new ProductService();
    service.getById(Number(id)).then(response => {
      setProduct(response.data);
    });
  };

  const addProductToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const removeProductFromCart = () => {
    if (product) {
      dispatch(removeFromCart(product.id));
    }
  };

  if (!product) {
    // Loading spinner or message can be added here
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
        </div>
        <div className="col-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
        <div className="mt-auto">
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

export default ProductDetail;
