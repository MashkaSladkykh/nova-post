import { useEffect} from 'react';
import { connect } from 'react-redux';

import {ThunkedInvoice, ThunkedWarehouses} from '../../store/actions';
import {store} from '../../store/configureStore';
import {selectInvoices, selectWarehouses} from '../../store/selectors';

export const Home = ({fetchInvoices, invoices, fetchWarehouses, warehouses}) => {
  useEffect(() => {fetchWarehouses();}, []);
  
  return (
    <div>
      <button onClick={() => fetchInvoices()}>invoice</button>
    </div>
  );
  
};

const mapStateToProps = state => ({
  invoices: selectInvoices(state),
  warehouses: selectWarehouses(state),
});

const mapDispatchToProps = dispatch => ({
  fetchInvoices: () => dispatch(ThunkedInvoice()),
  fetchWarehouses: () => dispatch(ThunkedWarehouses()),
});
  
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
  

