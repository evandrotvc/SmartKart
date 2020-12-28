import {Router} from 'express';
import path from 'path';

const __dirname = path.resolve();

const userRouter = Router();

// userRouter.use(userRouter.static(__dirname + "./"));
userRouter.get('/' , (req , resp)=> {
    return resp.sendFile('src/pages/SignIn/index.html' , {root: __dirname} );
    
})


export default userRouter;