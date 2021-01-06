import {Router , Request , Response} from 'express';
import CreateProductService from '../services/Products/CreateProducts';
import ListProductService from '../services/Products/ListProducts';

const productRouter = Router();

productRouter.post('/create' , (req : Request , resp : Response)=> {    

    const {name, price , Link} = req.body.data;

    console.log(name , price , Link);
    
    const _CreateProductService = new CreateProductService();

    const NewProduct = _CreateProductService.execute({
        name: name,
        price: price,
        url : Link
    });

    return resp.status(200).json(NewProduct);
})

productRouter.get('/',async (req , resp) => {
    const _ListProductService = new ListProductService();

    const ListProducts = await _ListProductService.execute();

    return resp.status(200).json(ListProducts);
})


export default productRouter;