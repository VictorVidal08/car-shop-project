import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Trail', 'Custom', 'Street']),
  // ref enum https://zod.dev/?id=zod-enums
  engineCapacity: z.number({
    required_error: 'EngineCapacity is required',
    invalid_type_error: 'EngineCapacity must be a number',
  }).positive().lte(2500),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { MotorcycleZodSchema };
