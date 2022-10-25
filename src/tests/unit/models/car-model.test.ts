import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Cars';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Frame Model', () => {
  const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
    // sinon.stub(Model, 'read').resolves(carMock);
    // sinon.stub(Model, 'update').resolves(carMockWithId);
    // sinon.stub(Model, 'delete').resolves(carMockWithId);
  });

	after(() => {
		sinon.restore();
	});

  describe('creating a new car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const carsFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carsFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});