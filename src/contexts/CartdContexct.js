import { createContext } from "react";

export const CardContext = createContext(null);

export const getAmountOfItemsInCart = (cartItemsObj) => {
	let amount = 0;
	for (const productId in cartItemsObj) {
		amount += cartItemsObj[productId];
	}
	return amount;
};
