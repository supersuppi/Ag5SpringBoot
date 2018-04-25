import { Product } from './product';

export interface Package {
    name: string;
    validity: string;
    price: string;
    products: Product[];   
}