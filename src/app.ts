import express from 'express';
import errorHandler from './middlewares/error';
import 'express-async-errors';
import carRouter from './routes/cars';
import motorcycleRouter from './routes/motorcycles';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(errorHandler);

export default app;
