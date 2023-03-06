import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import Header from "../header/Header";
import './app.scss';

function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Header />
				<Routes>
					<Route 
						path="/"
						element={<Main />}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
