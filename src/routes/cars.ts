import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/Cars';
import CarsService from '../services/CarService';

const carRoute = Router();

const car = new CarsModel();
const carService = new CarsService(car);
const carController = new CarsController(carService);

carRoute.post('/cars', (req, res) => carController.create(req, res));
carRoute.get('/cars', (req, res) => carController.read(req, res));
carRoute.get('/cars/:id', (req, res) => carController.readOne(req, res));
carRoute.put('/cars/:id', (req, res) => carController.update(req, res));
carRoute.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default carRoute;
