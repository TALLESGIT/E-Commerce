import UserButtons from "./UserButtons";

const Header = () => {
	return (
		<header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4">
			<a href="/">
				<span className="font-black">Moura</span>
				<span className="text-zinc-400 font-thin">STORIES</span>
			</a>
			<UserButtons />
		</header>
	);
};

export default Header;
