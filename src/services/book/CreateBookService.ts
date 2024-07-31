import prismaClient from "../../prisma";

interface BookRequest {
    name: string;
    description: string;
}

class CreateBookService {
    async execute({ name, description }: BookRequest) {

        if (!name && !description) {
            throw new Error("Nome e descrição são requeridos para realizar o cadastro.");
        }

        const book = await prismaClient.book.create({
            data: {
                name: name,
                description: description
            }
        });

        return book;
    }
}

export { CreateBookService };