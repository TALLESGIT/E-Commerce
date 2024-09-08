import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { Link } from "react-router-dom";

const UserButtons = () => {
	return (
		<div className="px-2">
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button className="px-2 relative">
				<FontAwesomeIcon icon={faCartShopping} />
				<div
					id="cart-amout"
					className="absolute inline-flex items-center justify-center w-4 h-4 font-bold text-white bg-red-500 rounded-full -top-2 -right-0 text-xs"
				>
					3
				</div>
			</button>

			<Link to="/history">
				<FontAwesomeIcon icon={faUser} />
			</Link>
		</div>
	);
};

export default UserButtons;
