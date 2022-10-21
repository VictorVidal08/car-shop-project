import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).int().gte(1900).lte(2022),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean({
    invalid_type_error: 'status must be a boolean',
  }).optional(),
  // ref optional: https://github.com/colinhacks/zod#optional 
  buyValue: z.number({
    required_error: 'BuyValue is required',
    invalid_type_error: 'BuyValue must be a number',
  }).int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;

export default VehicleZodSchema;
