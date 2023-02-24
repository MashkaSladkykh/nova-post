import { useEffect} from 'react';
import { connect } from 'react-redux';

import { API_URL } from '../constants';
import { requestBody } from '../utils';
import {setInvoices, setWarehouses} from '../../store/actions';
import {selectInvoices, selectWarehouses} from '../../store/selectors';

export const Home = ({setInvoices, invoices, setWarehouses, warehouses}) => {
  useEffect(() => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody('Address', 'getWarehouses', {})),
    })
      .then(response => response.json())
      .then(data => {setWarehouses(data.data)});
  },[]);
};

const mapStateToProps = state => ({
  invoices: selectInvoices(state),
  warehouses: selectWarehouses(state),
});
  
const mapDispatchToProps = {
  setInvoices,
  setWarehouses,
};
  
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
  

