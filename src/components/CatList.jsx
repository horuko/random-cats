import cats from '../stubs/sample';
import { CatItem } from './CatItem';

export const CatList = () => {
	return (
		<>
			{
				cats.map((cat) => 
					<CatItem key={cat.id} cat={cat}/>
				)
			}
		</>
	);
}
