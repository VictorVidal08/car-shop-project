import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
      // na chamada de index 0 `carModel.readOne` vai responder um fakeCar, a outra chamada (index 1) espera um retorno diferente.
			.onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null); 
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'delete')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null); 
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
		it('Success - creating a new car', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure - creating a new car', async () => {
			let error;
			try {
				await carService.create({});
			} catch (err:any) {
				error = err
			}
			expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('ReadOne Car', () => {
		it('Success - reading a car', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure - reading a car', async () => {
            let error;
			try {
				await carService.readOne(carMockWithId._id);
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
		});
	});

	describe('Read All Cars', () => {
		it('Success - reading all cars', async () => {
			const carCreated = await carService.read();

			expect(carCreated).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('delete a Car', () => {
		it('Success - delete a car', async () => {
			const carDeleted = await carService.delete(carMockWithId._id);

			expect(carDeleted).to.be.deep.equal(carMockWithId);
		});

		it('Failure - delete a car', async () => {
            let error;
			try {
				await carService.delete(carMockWithId.color); //forcing a error
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
		});
	});
});