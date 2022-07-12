
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/reducers';

const calculateSize = ({ width, height }) => {
	const aspectRatio = width / height;

	if (aspectRatio < 0.5) {
		return 'large';
	} else if (aspectRatio < 0.8) {
		return 'medium';
	} else {
		return 'small';
	}
}
export const CatItem = ({ cat }) => {
	const dispatch = useDispatch();
	const selectCat = (selectedCat) => {
		dispatch({ type: ACTIONS.selectCat, data: { selectedCat }});
	}

	return (
		<div
			className={`card card_${calculateSize(cat)}`}
			style={{
				background: `url(${cat.url})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			onClick={() => selectCat(cat)}
		>
			{cat.name ? <div className="name">{cat.name}</div> : ''}
			
		</div>
	);
}
