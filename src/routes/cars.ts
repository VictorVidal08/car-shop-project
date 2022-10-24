import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/Cars';
import CarsService from '../services/CarService';

const route = Router();

const car = new CarsModel();
const carService = new CarsService(car);
const carController = new CarsController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));

export default route;
