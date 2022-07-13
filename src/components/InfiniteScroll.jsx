import { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

export function InfiniteScroll({ children, onPaginate, currentPage }) {
	const scrollingLayer = useRef();

	const paginationHandler = ({ target }) => {
		const ZERO = target.clientHeight;

		if (target.scrollHeight - target.scrollTop <= ZERO) {
			onPaginate({
				page: currentPage.page + 1,
				limit: currentPage.limit,
			});
		}
	};

	useEffect(() => {
		scrollingLayer.current.addEventListener('scroll', paginationHandler);
		return () => {
			document.removeEventListener('scroll', paginationHandler);
		};
	}, [currentPage]);

	return (
		<div
			ref={scrollingLayer}
			style={{ flex: 1, height: '100%', overflowY: 'scroll' }}
			className="scrolling"
		>
			{children}
		</div>
	);
}

InfiniteScroll.propTypes = {
	children: PropTypes.shape({}).isRequired,
	onPaginate: PropTypes.func.isRequired,
	currentPage: PropTypes.shape({
		page: PropTypes.number,
		limit: PropTypes.number,
	}).isRequired,
};
