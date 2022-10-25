import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcyclesMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,  
}, {
  versionKey: false,
});

class Motorcycles extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Cars', motorcyclesMongooseSchema)) {
    super(model);
  }
}

export default Motorcycles;