import { ICar } from '../../interfaces/ICar';

const carMock:ICar = {
    model: 'Fusca',
    year: 1977,
    color: 'Branco',
    status: true,
    buyValue: 2000,
    doorsQty: 2,
    seatsQty: 5,
};

const carMockWithId:ICar & { _id:string } = {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Fusca',
    year: 1977,
    color: 'Branco',
    status: true,
    buyValue: 2000,
    doorsQty: 2,
    seatsQty: 5,
};

export { carMock, carMockWithId };