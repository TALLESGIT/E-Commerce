import UserButtons from "./UserButtons";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
	const { pathname } = useLocation();

	const completeHeader = () => (
		<header className="flex justify-between text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 z-10">
			<Link to="/">
				<span className="font-black">Moura</span>
				<span className="text-zinc-400 font-thin">STORIES</span>
			</Link>
			<UserButtons className="text-base" />
		</header>
	);

	function simpleHeader() {
		return (
			<header className="flex justify-between text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 z-10">
				<Link to="/">
					<span className="font-black">Moura</span>
					<span className="text-zinc-400 font-thin">STORIES</span>
				</Link>
			</header>
		);
	}

	return <>{pathname === "/" ? completeHeader() : simpleHeader()}</>;
};

export default Header;
