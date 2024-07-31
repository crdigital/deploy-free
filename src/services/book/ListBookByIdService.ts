import prismaClient from "../../prisma";

interface BookRequest {
    id: string;
}

class ListBookByIdService {
    async execute({ id }: BookRequest) {

        if (!id) {
            throw new Error("Necessário o id para buscar o produto.");
        }

        const book = await prismaClient.book.findUnique({ where: { id } });

        return book;
    }
}

export { ListBookByIdService };