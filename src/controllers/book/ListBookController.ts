import { Request, Response } from 'express';
import { ListBookService } from "../../services/book/ListBookService";

class ListBookController {
    async handle(req: Request, res: Response) {
        const bookList = new ListBookService();
        const book = await bookList.execute();

        return res.json(book);
    }
}

export { ListBookController };