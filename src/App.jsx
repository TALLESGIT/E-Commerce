import { useState } from "react";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurshaseHistory";
import { CartContext } from "./contexts/CartdContexct";

function App() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState({});

	const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

	const removeFromCart = (productId) => {
		const cartItemsCopy = { ...cartItems };
		delete cartItemsCopy[productId];
		setCartItems(cartItemsCopy);
	};

	const addToCart = (productId) => {
		setCartItems({
			...cartItems,
			[productId]: (cartItems[productId] ?? 0) + 1,
		});
	};

	const decreaseUnit = (productId) => {
		if (cartItems[productId] > 1) {
			setCartItems({
				...cartItems,
				[productId]: cartItems[productId] - 1,
			});
		} else {
			removeFromCart(productId);
		}
	};

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				toggleCartOpen,
				cartItems,
				addToCart,
				decreaseUnit,
				removeFromCart,
			}}
		>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/history" elemtn={<PurchaseHistory />} />
			</Routes>
		</CartContext.Provider>
	);
}

export default App;
