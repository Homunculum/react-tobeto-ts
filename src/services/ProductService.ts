import axios, { AxiosResponse } from "axios";
import {GetAllProductsModel} from "../models/responses/GetAllProductsModel";
import { ProductModel } from "../models/responses/ProductModel";


class ProductService{
 
  getById(id: number) {
		return axios.get<ProductModel>("https://dummyjson.com/products/" + id);
	}
  
    getAll() {
		return axios.get<GetAllProductsModel>("https://dummyjson.com/products");
	}
    
	
}
export default ProductService;