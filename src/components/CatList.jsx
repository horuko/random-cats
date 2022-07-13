import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CatItem } from './CatItem';
import { ACTIONS } from '../redux/sagas';
import { InfiniteScroll } from './InfiniteScroll';

export function CatList() {
	const dispatch = useDispatch();
	const cats = useSelector((store) => store.cats);
	const currentPage = useSelector((store) => store.currentPage);
	const selectedCat = useSelector((store) => store.selectedCat);
	const navigate = useNavigate();
	const [fromGoBack, setFromGoBack] = useState(true);

	useEffect(() => {
		/* 	TODO: como quitar el fromGoBack. Al venir desde un back del navegador,
			se eliminael selectedCat en el componente CatDetail,
		 	pero debe haber una condición de carrera en la gestión de estados redux-react
			por la que al aterrizar aquí el selectedCat aun está.
		 */
		if (selectedCat && !fromGoBack) {
			navigate('/cat');
		}

		setFromGoBack(false);
	}, [selectedCat]);

	useEffect(() => {
		if (cats?.length) {
			return;
		}
		dispatch({ type: ACTIONS.catsSearch, payload: { limit: 30, page: 1 } });
	}, []);

	const paginate = () => {
		const page = { ...currentPage, ...{ page: currentPage.page + 1 } };

		dispatch({ type: ACTIONS.catsSearch, payload: { ...page } });
		/*
			TODO: es curioso ver que al llevar aquí la acción de paginar,
			solo se lanza una vez. Debe ser cosa del
			ciclo de ejecución de react
		*/
	};

	return (
		<InfiniteScroll onPaginate={paginate} currentPage={currentPage}>
			<div className="card_container">
				{
					cats.map((cat) => (
						<CatItem
							key={`${cat.id}_${new Date().getTime()}`}
							cat={cat}
						/>
					))
				}
			</div>
		</InfiniteScroll>
	);
}
