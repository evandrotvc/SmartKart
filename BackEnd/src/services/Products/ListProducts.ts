import Products from '../../models/Products';
import {getRepository} from 'typeorm'

export default class ListProductService{
    public async execute() : Promise<Products[]>{

        const ProductRepository = getRepository(Products);

        const listProducts = await ProductRepository.find();

        return listProducts;
    }
}