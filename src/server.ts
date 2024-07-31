import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express()

app.use(express.json())
app.use(cors());
app.use(router);

// configurando o middleware de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  });

  next();
});


const port = process.env.PORT ?? 4000

app.listen(port, () => console.log('Server is running on port ', port))
