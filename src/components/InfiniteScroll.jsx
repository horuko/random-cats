import { useEffect, useRef } from 'react';

export const InfiniteScroll = ({ children, onPaginate, currentPage }) => {

	const scrollingLayer = useRef();

	const paginationHandler = ( { target }) => {
		const ZERO = target.clientHeight;

		if (target.scrollHeight - target.scrollTop <= ZERO) {
			onPaginate({
				page: currentPage.page +1,
				limit: currentPage.limit
			});
		}
	}

	useEffect(() => {
		scrollingLayer.current.addEventListener('scroll', paginationHandler);
		return () => {
			document.removeEventListener('scroll', paginationHandler);
		};
	}, [currentPage]);

	return (
		<div ref={scrollingLayer}
			style={{flex: 1, height: '100%', overflowY: 'scroll'}} className="scrolling"
		>
			{children}
		</div>
	);
}
