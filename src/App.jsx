import { Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import PurcheaseHistory from "./pages/PurchaseHistoryPage/PurshaseHistory.jsx";

export default function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="/history" element={<PurcheaseHistory />} />
			</Routes>
		</div>
	);
}
