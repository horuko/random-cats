import { useEffect } from 'react';
import { CatItem } from './CatItem';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/sagas';

export const CatList = () => {
	const dispatch = useDispatch();
	const cats = useSelector((store) => store.cats) ;

	useEffect(() => {
		dispatch({type: ACTIONS.catsSearch, payload: { limit: 30, page: 1}});
	}, []);

	return (
		<div className="card_container">
			{
				cats.map((cat) => 
					<CatItem key={cat.id} cat={cat}/>
				)
			}
		</div>
	);
}
