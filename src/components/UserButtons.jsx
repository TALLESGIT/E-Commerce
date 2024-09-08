import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const UserButtons = () => {
	return (
		<div>
			<button type="button">
				<FontAwesomeIcon icon={faCartShopping} />
			</button>

			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a href="">
				<FontAwesomeIcon icon={faUser} />
			</a>
		</div>
	);
};

export default UserButtons;
