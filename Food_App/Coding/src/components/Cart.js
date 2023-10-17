import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    const dispatch= useDispatch();
    const handleClearItems = () => {
        dispatch(clearCart());
    }

    return(
    <div className="m-5 p-4">
        <div className="text-center text-xl font-bold">Cart</div>
        <div className="m-5 p-4 text-right mx-[270px] my-[25px] pt-2">
            <button className="text-sm font-semibold border border-gray text-gray-400 rounded bg-white px-[6px] pt-2 pb-3 mx-3" onClick={handleClearItems}>Clear Cart</button>
        </div>
        <div className="mx-[270px] my-[25px] pt-2">  
        {cartItems.length === 0 && <div className="text-center text-sm text-gray-500 font-semibold" >Your cart is empty</div>}
        <ItemCards itemCards={cartItems} />
    </div>
    
    </div>);
}

export default Cart;
