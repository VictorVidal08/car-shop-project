import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/Motorcycles';
import MotorcycleService from '../services/MotorcycleService';

const motorcycleRoute = Router();
const motorcyclesId = '/motorcycles/:id';

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcycleRoute.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
motorcycleRoute.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
motorcycleRoute.get(motorcyclesId, (req, res) => motorcycleController.readOne(req, res));
motorcycleRoute.put(motorcyclesId, (req, res) => motorcycleController.update(req, res));
motorcycleRoute.delete(motorcyclesId, (req, res) => motorcycleController.delete(req, res));

export default motorcycleRoute;
