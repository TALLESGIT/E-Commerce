import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts/CartdContexct";

const CartProducts = () => {
	const { cartItems } = useContext(CartContext);
	const cartItemsArray = [];
	for (const itemId in cartItems) {
		cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
	}

	return (
		<section className="flex flex-col justify-start overflow-auto gap-2">
			{cartItemsArray.map((product) => {
				return <CartItem {...product} key={`key_${product.id}`} />;
			})}
		</section>
	);
};

export default CartProducts;
