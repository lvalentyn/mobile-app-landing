import { Header, Hero, Experience, Search, Download, Footer } from "./components";

import "./App.scss";

const App = () => {
	return (
		<div className="App text-white overflow-hidden">
			<Header />
			<Hero />
			<Experience />
			<Search />
			<Download />
			<Footer />
		</div>
	);
}

export default App;