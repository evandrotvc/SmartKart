import Products from '../../models/Products';
import { getRepository} from 'typeorm';

interface IProduct {
    name : string,
    price : number,
    url : string
}

export default class CreateProductService {
    public async execute({name , price , url } : IProduct): Promise<Products>{
        const ProductRepository = getRepository(Products);

        const ProductCreate = ProductRepository.create({
            name : name,
            price: price,
            url_image: url
        });

        await ProductRepository.save(ProductCreate);

        return ProductCreate;
    }
}