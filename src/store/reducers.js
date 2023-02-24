import { SET_INVOICES, SET_WAREHOUSES } from './types';

const initialState = {
  invoices: [],
  warehouses: [],
};

export const post = (state = initialState, action) => {
  switch (action.type) {
  case SET_INVOICES:
    return {
      ...state,
      invoices: action.payload,
    };
  case SET_WAREHOUSES:
    return {
      ...state,
      warehouses: action.payload,
    };  

  default:
    return state;
  }
};
