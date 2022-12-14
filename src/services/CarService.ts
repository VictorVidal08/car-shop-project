import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:unknown):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return this._car.create(parsed.data);
  }

  public async read():Promise<ICar[]> {
    const allCars = await this._car.read();
    if (!allCars) throw new Error(ErrorTypes.EntityNotFound);
    return allCars;
  }

  public async readOne(_id:string):Promise<ICar> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._car.update(_id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }

    return updated;
  }

  public async delete(_id:string):Promise<ICar> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    const car = await this._car.delete(_id);
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);
    return car;
  }
}

export default CarService;
