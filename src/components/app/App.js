import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import './app.scss';
import Footer from "../footer/Footer";
import Search from "../search/Search";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Main from "../pages/Main";
import SearchResult from "../pages/SearchResult";

function App() {
	const nav = useNavigate();

	useEffect(() => {
		nav('/general');
	}, [])
	
	return (
		<div className="app">
			<div className="app__container">
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Search />
				</ErrorBoundary>
				<Routes>
					<Route 
						path="/:category"
						element={<Main />}
					/>
					<Route 
						path="/search_results"
						element={<SearchResult />}
					/>
					
				</Routes>
				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>
				
				
				
				
				
			</div>
		</div>
	);
}

export default App;
