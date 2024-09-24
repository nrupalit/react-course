import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../../redux/redux-actions";

export default function Checkout() {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const total = products.map(product => {
        return product.price * product.quantity
    }).reduce((total, price) => {
        return total + price;
    })

    const reset = () => {
        dispatch(cartAction.reset())
    }
    return (
        <section className="checkout-container">
            <h1 className="grant-total">Grant total is: {total} </h1>
            <button onClick={reset}>Reset</button>
        </section>
    )
}