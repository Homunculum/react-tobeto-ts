
import { useEffect, useState } from 'react'
import ProductService from "../../services/ProductService";
import { ProductModel } from '../../models/responses/ProductModel';
import ProductCard from '../../components/ProductCard/ProductCard';

type Props = {}

const ProductsPage = (props: Props) =>  {
    const [products, setProducts] = useState<ProductModel[]>([]);


    useEffect(()=>{
        fetchProducts();
    },[]);
    const fetchProducts = () => {
		let service: ProductService = new ProductService();
		service.getAll().then(response => {
			setProducts(response.data.products);
		});
	};
    return (
    <div className="container">
    <div className="row">
        {products.map(product => (
            <>
            <div key={product.id} className="col-3">
                <ProductCard product={product} />
            </div></>
        ))}
    </div>
</div>
    );
}

export default ProductsPage;