import { Request, Response } from 'express';
import { ListBookByIdService } from '../../services/book/ListBookByIdService';

class ListBookByIdController {
    async handle(req: Request, res: Response) {

        const id = req.params.id as unknown as string;

        const listBookByIdService = new ListBookByIdService();

        const bookById = await listBookByIdService.execute({ id });

        return res.json(bookById);
    }
}

export { ListBookByIdController };