import { FOOD_IMAGE } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ItemCards = (props) => {
  const itemCards = props?.itemCards;

  // const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    dispatch(addItem(items));
  }

  return (
    <div>
      {itemCards?.map((items) => (
        <div
          className="mt-5 pb-7 flex justify-between justify-items-center border-b-[1px] border-solid border-[#7e808c]"
          key={items.card.info.id}
        >
          <div className="pt-2">
            <div className="mr-2 text-[17px] font-bold text-[#3e4152] break-words">
              {items.card.info.name}{" "}
            </div>
            <div className="font-normal text-[#3e4152] text-xs pt-[3px] pb-2">
              <span className="text-[12px] mr-[0.1rem]">
                <i className="fa fa-inr"></i>
                {items.card.info.price / 100 ||
                  items.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-[12px] text-[#7e808c] pb-[2px]">
              {items.card.info.description}
            </div>
          </div>
          <div className="restro-menu-image">
            <div className="w-[118px] h-[96px] object-cover rounded-md" >
              <img
                className="w-[118px] h-[96px] object-cover rounded-md"
                src={`${FOOD_IMAGE}${items.card.info.imageId}`}
                alt="food-image"
              ></img>
              <div className="position:absolute translate-y-[-50%]">
                
                <div className="border border-gray text-center text-green-500 rounded bg-white text-[12px] font-bold px-[6px] pt-2 pb-3 mx-3 z-10 position:relative">
                  {/* {cartItems===items && <button>-</button>} */}
                   <button onClick={()=>handleAddItem(items)}>
                  ADD 
                  </button>
                  {/* {cartItems.length> 0 && <p>{cartItems.length}</p>}
                  {cartItems.length>0 && <button>+</button>} */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
