import { SET_INVOICES, SET_WAREHOUSES } from './types';

export const setInvoices = payload => ({
  type: SET_INVOICES,
  payload,
});

export const setWarehouses = payload => ({
  type: SET_WAREHOUSES,
  payload,
});