import axios from 'axios';

import { API_URL } from '../pages/constants';
import { requestBody } from '../pages/utils';

import { SET_INVOICES, SET_WAREHOUSES } from './types';

export const setInvoices = payload => ({
  type: SET_INVOICES,
  payload,
});

export const setWarehouses = payload => ({
  type: SET_WAREHOUSES,
  payload,
});

export const ThunkedWarehouses = () =>     
  dispatch =>                        
    axios.post(API_URL,  requestBody('Address', 'getWarehouses', {}))
      .then(res => res.data.data)
      .then(data => {
        dispatch(setWarehouses(data));
      });

export const ThunkedInvoice = () =>     
  dispatch =>                        
    axios.post(API_URL,  requestBody('TrackingDocument', 'getStatusDocuments', {
      'Documents': [
        {
          'DocumentNumber': '20400048799001',
        },
      ],
    }))
      .then(res => res.data.data)
      .then(data => {
        dispatch(setInvoices(data));
      });