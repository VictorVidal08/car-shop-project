import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarController from '../../../controllers/CarsController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/Cars';


describe('Car Controller Tests', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMock]);
    sinon.stub(carService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create a new Car', () => {
    it('Success into create a new car', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success into reading a car by its id', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read all Cars', () => {
    it('Success into reading all cars', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });
   
  describe('Delete a Car', () => {
    it('Success into reading a cars by its id', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledWith()).to.be.true;
    });
  });

});