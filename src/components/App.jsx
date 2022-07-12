import { CatList } from "./CatList";
import { CatDetail } from "./CatDetail";
import { Routes, Route, Navigate, Link } from "react-router-dom";

export const App = () => {
	return (
		<div className="main">
			<h1>Adopta un gato</h1>	
			<hr/>
			<Routes>
				<Route path='/' element={<CatList/>}></Route>
				<Route path='/cat' element={<CatDetail/>}></Route>
				<Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
			</Routes>
			
		</div>
	);
}
