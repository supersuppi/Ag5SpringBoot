import { Product } from './product';

export interface Package {
    id: string;
    name: string;
    validity: string;
    price: string;
    products: Product[];   
}