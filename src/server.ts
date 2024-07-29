import express, { Request, Response } from 'express'
import { prismaClient } from './database'

const app = express()
app.use(express.json())

const port = process.env.PORT ?? 4000

app.get('/', (request: Request, response: Response) => {
  return response.json({ msg: "Hello world" });
});

app.get('/books', async (request: Request, response: Response) => {
  const books = await prismaClient.book.findMany()
  return response.json(books);
})

app.post('/books', async (request: Request, response: Response) => {
  const { description, name } = request.body
  const book = await prismaClient.book.create({
    data: {
      description,
      name,
    },
  })
  return response.json(book)
})

app.listen(port, () => console.log('Server is running on port ', port))
