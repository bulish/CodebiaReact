import React from 'react';

function WhatWeDoCard({ cards, setCards, card }) {

	return (
		<div className="card">
			<div className="card__subtitle">{card.subtitle}</div>
			<div className="card__title">{card.title}</div>
			<div className="card__text">{card.text}</div>
			<div className="card__btn">
				<div className="card__btn">{card.button}</div>
				<div className="card__btn__hover"></div>
			</div>
		</div>
	);
}

export default WhatWeDoCard;
