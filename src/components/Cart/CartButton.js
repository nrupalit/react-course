import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../redux/redux-actions';

const CartButton = (props) => {
  const cartItems = useSelector(state => state.cart.checkoutCartItems);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(cartAction.checkout())
  }
  return (
    <button onClick={handleCheckout} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
