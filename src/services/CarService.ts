import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _frame:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._frame = model;
  }

  public async create(obj:unknown):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    console.log(parsed);
    if (!parsed.success) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return this._frame.create(parsed.data);
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
