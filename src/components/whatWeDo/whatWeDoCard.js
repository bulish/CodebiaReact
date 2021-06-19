import React from 'react';
import {gsap} from 'gsap';

function WhatWeDoCard({ card }) {
	const mouseEnterBtn = (event) => {
		const myTarget = event.target.children;
		gsap.to(myTarget, { x: '100%' });
	};

	const mouseLeaveBtn = (event) => {
		const myTarget2 = event.target.children;
		gsap.to(myTarget2, { x: '0%' });
	};
	return (
		<div className="card">
			<div className="card__subtitle">{card.subtitle}</div>
			<div className="card__title">{card.title}</div>
			<div className="card__text">{card.text}</div>
			<div className="card__btn" onMouseEnter={mouseEnterBtn} onMouseLeave={mouseLeaveBtn}>{card.button}
				<div className="card__btn__hover"></div></div>
		</div>
	);
}

export default WhatWeDoCard;
