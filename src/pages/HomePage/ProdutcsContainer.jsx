import { catalog } from "../../utils/catalog";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
	return (
		<section className="container flex flex-wrap mx-auto justify-center gap-10">
			{catalog.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</section>
	);
};

export default ProductsContainer;
