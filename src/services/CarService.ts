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

  //   public async readOne(_id:string):Promise<IFrame> {
  //     const frame = await this._frame.readOne(_id);
  //     if (!frame) throw new Error(ErrorTypes.EntityNotFound);
  //     return frame;
  //   }

  //   public async update(_id: string, obj: unknown): Promise<IFrame> {
  //     const parsed = FrameZodSchema.safeParse(obj);

  //     if (!parsed.success) {
  //       throw parsed.error;
  //     }

  //     const updated = await this._frame.update(_id, parsed.data);

  //     if (!updated) {
  //       throw new Error(ErrorTypes.EntityNotFound);
  //     }

//     return updated;
//   }
}

export default CarService;
