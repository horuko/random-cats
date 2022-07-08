import cats from '../stubs/sample';
import { CatItem } from './CatItem';

export const CatList = () => {
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
