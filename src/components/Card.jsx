import React from 'react';
import {generate as id} from 'shortid';

const Card = ({info})=>{

	return (
		<>	
			<div className="card" key={info.id} >
				<h2 className="card__title">{info.title}</h2>
				<img src={info.img} alt='wolf_picture' className="card__img" />
				<p className="card__description">{info.description}</p>
				<p className="card__author">{info.author}</p>
				<ul className="card__tags">
					{info.tags.map((tags, key) => (<li className="card__tag" key={id()}>{info.tags[key]}</li>) )}
				</ul>
				<p className="card__views">{info.views} Views</p>
				<p className="card__date">{info.date}</p>
			</div>
		</>


		);

}

export default Card