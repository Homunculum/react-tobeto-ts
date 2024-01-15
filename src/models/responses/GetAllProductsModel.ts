import { ProductModel } from "./ProductModel";

export interface GetAllProductsModel{
	map(arg0: (product: ProductModel) => string): Iterable<unknown> | null | undefined;
    total: number;
	skip: number;
	limit: number;
	products: ProductModel[];
}