import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { ACTIONS } from '../redux/reducers';

const calculateSize = ({ width, height }) => {
	const aspectRatio = width / height;

	if (aspectRatio < 0.5) {
		return 'large';
	} if (aspectRatio < 0.8) {
		return 'medium';
	}
	return 'small';
};
export function CatItem({ cat }) {
	const dispatch = useDispatch();
	const selectCat = (selectedCat) => {
		dispatch({ type: ACTIONS.selectCat, data: { selectedCat } });
	};

	return (
		<div
			role="button"
			onKeyDown={() => selectCat(cat)}
			tabIndex="0"
			className={`card card_${calculateSize(cat)}`}
			style={{
				background: `url(${cat.url})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			onClick={() => selectCat(cat)}
		>
			{cat.name ? <div className="name">{cat.name}</div> : ''}
		</div>
	);
}

const CatType = PropTypes.shape({
	name: PropTypes.string,
	url: PropTypes.string.isRequired,
});
CatItem.propTypes = {
	cat: CatType.isRequired,
};
