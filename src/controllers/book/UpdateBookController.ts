import { Request, Response } from 'express';
import { UpdateBookService } from '../../services/book/UpdateBookService';

class UpdateBookController {
    async handle(req: Request, res: Response) {

        const { name, description } = req.body;

        const id = req.params.id as unknown as string;


        const updateBookService = new UpdateBookService();

        const updateBook = await updateBookService.execute({
            id,
            name,
            description
        });

        return res.json(updateBook);
    }
}

export { UpdateBookController }
