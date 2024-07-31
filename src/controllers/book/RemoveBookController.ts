import { Request, Response } from 'express';
import { RemoveBookService } from '../../services/book/RemoveBookService';

class RemoveBookController {
    async handle(req: Request, res: Response) {

        const id = req.params.id as unknown as string;

        const removeBookService = new RemoveBookService();

        const bookRemove = await removeBookService.execute({ id });

        return res.json(bookRemove);
    }
}

export { RemoveBookController };
