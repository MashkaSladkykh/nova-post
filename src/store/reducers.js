import { SET_INVOICES } from './types';

const initialState = {
  invoices: [],
};

export const post = (state = initialState, action) => {
  switch (action.type) {
  case SET_INVOICES:
    return {
      ...state,
      invoices: action.payload,
    };

  default:
    return state;
  }
};
