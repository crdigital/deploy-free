import { Request, Response } from 'express';
import { CreateBookService } from '../../services/book/CreateBookService';

class CreateBookController {
    async handle(req: Request, res: Response) {

        const { name, description } = req.body;

        const createBookService = new CreateBookService();

        const newBook = await createBookService.execute({ name, description });

        return res.json(newBook);
    }
}

export { CreateBookController };