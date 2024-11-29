import "./App.css";
import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import Slider from "./components/slider/Slider";

function App() {
	return (
		<main>
			<Header />
			<section>
				<SideMenu />

				<div className="content">
					<Slider />
				</div>
			</section>
		</main>
	);
}

export default App;
