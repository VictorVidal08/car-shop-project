export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
//   InvalidMongoId = 'InvalidMongoId',
}
  
  type ErrorResponseObject = { 
    message: string;
    httpStatus: number
  };
  
export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;
  
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Something went wrong',
    httpStatus: 400,
  },
//   InvalidMongoId: {
//     message: 'Id must be a 24 characters hexadecimal',
//     httpStatus: 400,
//   },
};
