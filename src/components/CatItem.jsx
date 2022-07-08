
const calculateSize = ({ width, height }) => {
	const aspectRatio = width / height;
	console.log(width, height, aspectRatio)
	if (aspectRatio < 0.5) {
		return 'large';
	} else if (aspectRatio < 0.8) {
		return 'medium';
	} else {
		return 'small';
	}
}
export const CatItem = ({ cat }) => {
	return (
		<div className={`card card_${calculateSize(cat)}`} style={{background: `url(${cat.url})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
			
		</div>
	);
}
