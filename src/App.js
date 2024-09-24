import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Checkout from './components/Shop/Checkout';

function App() {
  const isCheckout = useSelector(state => state.cart.isCheckout);
  return (
    <Layout>
      {isCheckout ? <Checkout /> : <><Cart /><Products /></>}
    </Layout>
  );
}

export default App;
