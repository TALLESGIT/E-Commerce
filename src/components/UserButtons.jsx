import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const UserButtons = () => {
	return (
		<div className="px-2">
			<button type="button" className="px-2">
				<FontAwesomeIcon icon={faCartShopping} />
			</button>

			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a href="#">
				<FontAwesomeIcon icon={faUser} />
			</a>
		</div>
	);
};

export default UserButtons;
