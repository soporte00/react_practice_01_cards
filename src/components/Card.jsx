import React from 'react';
import {generate as id} from 'shortid';

const Card = ({title,img,author,tags,views,date,children})=>{

	return (
		<>	
			<div className="card">
				<h2 className="card__title">{title}</h2>
				<img src={img} alt='wolf_picture' className="card__img" />
				<p className="card__description">{children}</p>
				<p className="card__author">{author}</p>
				<ul className="card__tags">
					{
						tags.map( tag => (
										<li className="card__tag" key={id()}>{tag}</li>
									) 
						)
					}
				</ul>
				<p className="card__views">{views} Views</p>
				<p className="card__date">{date}</p>
			</div>
		</>

	);

}

export default Card