import Products from '../../models/Products';
import {Double, getRepository} from 'typeorm';

interface IProduct {
    name : string,
    price : Double,
    url : string
}

export default class CreateProductService {
    public async execute({name , price , url } : IProduct): Promise<void>{
        const ProductRepository = getRepository(Products);

        
    }
}