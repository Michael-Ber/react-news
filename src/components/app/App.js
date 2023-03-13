import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import Header from "../header/Header";
import './app.scss';
import LatestPost from "../latest/LatestPost";
import Recommended from "../recommended/Recommended";
import Footer from "../footer/Footer";

function App() {
	
	return (
		<div className="app">
			<div className="app__container">
				<Header />
				<Main/>
				<LatestPost/>
				<Recommended />
				<Footer />
				{/* <Routes>
					<Route 
						path="/"
						element={<Main />}
					/>
					<Route 
						path="/"
						element={<LatestPost />}
					/>
					
				</Routes> */}
			</div>
		</div>
	);
}

export default App;
