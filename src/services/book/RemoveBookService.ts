import prismaClient from "../../prisma";

interface BookRequest {
    id: string;
}

class RemoveBookService {
    async execute({ id }: BookRequest) {
        if (!id) {
            throw new Error("Necessário o id do livro para excluir.");
        }

        const bookRemove = await prismaClient.book.delete({ where: { id } });

        return bookRemove;
    }
}

export { RemoveBookService };