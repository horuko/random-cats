import { useEffect } from 'react';
import { CatItem } from './CatItem';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/sagas';
import { InfiniteScroll } from "./InfiniteScroll";

export const CatList = () => {
	const dispatch = useDispatch();
	const cats = useSelector((store) => store.cats) ;
	const currentPage = useSelector((store) => store.currentPage);

	useEffect(() => {
		dispatch({type: ACTIONS.catsSearch, payload: { limit: 30, page: 1}});
	}, []);

	const paginate = () => {
		const page = {...currentPage, ...{page: currentPage.page + 1}};

		dispatch({type: ACTIONS.catsSearch, payload: {...page}});
		// TODO: es curioso ver que al llevar aquí la acción de paginar, solo se lanza una vez. Debe ser cosa del 
		// ciclo de ejecución de react
	};

	return (
		<InfiniteScroll onPaginate={paginate} currentPage={currentPage}>
			<div className="card_container">
				{
					cats.map((cat) => 
						<CatItem key={`${cat.id}_${new Date().getTime()}`} cat={cat}/>
					)
				}
			</div>
		</InfiniteScroll>
	);
}
