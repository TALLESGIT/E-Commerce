import { useContext } from "react";
import { CardContext } from "../../contexts/CartdContexct";
import CartItem from "./CartItem";

const CartProducts = () => {
	const { cartItems } = useContext(CardContext);
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
