import { useEffect } from 'react';

import { API_URL } from '../constants';
import { requestBody } from '../utils';

export const Home = () => {
  useEffect(() => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody('Address', 'getWarehouses', {})),
    })
      .then(response => response.json())
      .then(data => console.log(data.data));
  },[]);

};