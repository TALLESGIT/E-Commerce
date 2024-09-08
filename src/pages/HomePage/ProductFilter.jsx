const ProductFilter = () => {
	return (
		<section className="flex justify-center items-center py-8">
			<input
				id="filter-0"
				type="radio"
				name="filter-selection"
				className="hidden"
			/>
			<label
				className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
				htmlFor="filter-0"
			>
				Todos
			</label>
			<input
				id="filter-1"
				type="radio"
				name="filter-selection"
				className="hidden"
			/>
			<label
				className=" bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
				htmlFor="filter-1"
			>
				Masculino
			</label>
			<input
				dir="filter-3"
				type="radio"
				name="filter-selection"
				className="hidden"
			/>
			<label
				dir="rtl"
				className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
				htmlFor="filter-3"
			>
				Feminine
			</label>
		</section>
	);
};

export default ProductFilter;
