import validator from 'validator';
import { required } from '../../validations/Validatiors';
export const ValidationRules = [
  {
    field: 'name',
    method: required,
    message: 'Please provide name.'
  },
  {
    field: 'name',
    method: validator.isInt,
    message: 'Only string allowed.'
  },
  {
    field: 'quantity',
    method: required,
    message: 'Please Enter quantity.'
  },
  {
    field: 'price',
    method: required,
    message: 'Please provide price.'
  }
];
