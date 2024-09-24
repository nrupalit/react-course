import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const products = useSelector(state => state.cart.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((product, index) => (
          <CartItem key={index}
            item={{ title: product.name, quantity: product.quantity, total: (product.quantity * product.price), price: product.price, index }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
