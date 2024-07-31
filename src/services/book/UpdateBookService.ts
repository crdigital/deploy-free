import prismaClient from "../../prisma";

interface BookRequest {
    id: string;
    name: string;
    description: string;
}

class UpdateBookService {
    async execute({ id, name, description }: BookRequest) {

        if (!id && !name && !description) {
            throw new Error("Id, nome e descrição são requeridos para realizar a atualização dom produto.");
        }

        const updateBook = await prismaClient.book.update({
            where: { id },
            data: {
                name,
                description
            }
        });

        return updateBook;
    }
}

export { UpdateBookService };