import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
	return (
		<article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg ">
			<img
				src={image}
				alt={`Imagem do product ${id}`}
				className="group-hover:scale-110 rounded-xl mx-4 my-3 transition dur"
			/>
			<p className="mx-4 text-sm text-slate-400">{name}</p>
			<p className="mx-4 text-sm">{brand}</p>
			<p className="mx-4 text-sm text-green-700">{price}</p>

			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800">
				<FontAwesomeIcon icon={faCartPlus} />
			</button>
		</article>
	);
};

export default ProductCard;
