import { Router, Request, Response } from 'express';

// import controllers
import { ListBookController } from './controllers/book/ListBookController';
import { CreateBookController } from './controllers/book/CreateBookController';
import { UpdateBookController } from './controllers/book/UpdateBookController';
import { ListBookByIdController } from './controllers/book/ListBookByIdController';
import { RemoveBookController } from './controllers/book/RemoveBookController';

const router = Router();

//routes

// default
router.get('/', (req: Request, res: Response) => {
    return res.json({ msg: "Welcome Books!" })
});
//listBooks
router.get('/books', new ListBookController().handle);
// listBookById
router.get('/book/:id', new ListBookByIdController().handle);
//createBook
router.post('/book', new CreateBookController().handle);
// updateBook
router.put('/book/:id', new UpdateBookController().handle);
//deletBook
router.delete('/book/:id', new RemoveBookController().handle);


export { router };

