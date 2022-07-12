import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/reducers';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

const styles = {
	objectFit: 'cover',
	width: '600px',
	height: '600px',
	borderRadius: '5px',
	marginTop: '8px',
}
export const CatDetail = () => {
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();
	const cat = useSelector((store) => store.selectedCat);
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			dispatch({ type: ACTIONS.selectCat, data: { }});
		};
	}, []);

	useEffect(() => {
		if (!cat) {
			navigate(-1);
		}
	}, [cat]);

	const adopt = (name) => {
		const adoptedCat = {...cat, ...{ name }};

		dispatch({type: ACTIONS.adoptCat, data: {adoptedCat}});
		dispatch({ type: ACTIONS.selectCat, data: { }});
		reset();
	}

	return (
		<>
			{ cat && (
				<div className='center flex'>
					<img style={styles} src={cat.url}/>
					<form
						className="formCenter"
						onSubmit={handleSubmit(( {catName} ) => { adopt(catName); })}
					>
						<label htmlFor="catName">¿Cómo se llama?</label>
						<input
							name="catName"
							type="text"
							{...register('catName')}
						/>
						<input type="submit" value="Adoptame!"/>
					</form>
				</div>
				
			)}
		</>
	);
};