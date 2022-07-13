import { Routes, Route, Navigate } from 'react-router-dom';
import { CatList } from './CatList';
import { CatDetail } from './CatDetail';

export function App() {
	return (
		<div className="main">
			<h1>Adopta un gato</h1>
			<hr />
			<Routes>
				<Route path="/" element={<CatList />} />
				<Route path="/cat" element={<CatDetail />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}
