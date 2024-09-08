import UserButtons from "./UserButtons";

const Header = () => {
	return (
		<header className="flex justify-between text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 z-10">
			<a href="/">
				<span className="font-black">Moura</span>
				<span className="text-zinc-400 font-thin">STORIES</span>
			</a>
			<UserButtons className="text-base" />
		</header>
	);
};

export default Header;
