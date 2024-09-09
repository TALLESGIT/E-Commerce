import { Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import PurcheaseHistory from "./pages/PurchaseHistoryPage/PurshaseHistory.jsx";
import { CardContext } from "./contexts/CartdContexct.js";
import { useEffect, useState } from "react";

export default function App() {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const [cartItems, setCartItems] = useState({});

	const addToCart = (productId) => {
		setCartItems({
			...cartItems,
			[productId]: (cartItems[productId] ?? 0) + 1,
		});
	};

	return (
		<CardContext.Provider
			value={{ isCartOpen, setIsCartOpen, cartItems, addToCart }}
		>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="/history" element={<PurcheaseHistory />} />
			</Routes>
		</CardContext.Provider>
	);
}
