import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).int().positive().gte(2)
    .lte(4),
  seatsQty: z.number({
    required_error: 'SeatsQty is required',
    invalid_type_error: 'SeatsQty must be a number',
  }).gte(2).lte(7),
});

export type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema };
