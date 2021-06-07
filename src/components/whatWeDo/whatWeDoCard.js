import React from 'react';
import gsap from 'gsap';

function WhatWeDoCard({ cards, setCards, card }) {
	const mouseEnterButton = () => {
		gsap.to('.card', { border: '0.05px solid rgb(83, 83, 83)' });
		gsap.to('.card__btn', {y:'-20%'});
		gsap.to('.card__btn__hover', { y: '0%' });
		gsap.to('.card__btn__text', { color: 'black' });
	};

	const mouseLeaveButton = () => {
		gsap.to('.card', { border: '0.05px solid transparent' });
		gsap.to('.card__btn', { y: '0'});
		gsap.to('.card__btn__hover', { y: '100%' });
		gsap.to('.card__btn__text', { color: 'white' });
	};

	return (
		<div className="card">
			<div className="card__subtitle">{card.subtitle}</div>
			<div className="card__title">{card.title}</div>
			<div className="card__text">{card.text}</div>
			<div
				className="card__btn"
				onMouseEnter={mouseEnterButton}
				onMouseLeave={mouseLeaveButton}
			>
				<div className="card__btn__text">{card.button}</div>
				<div className="card__btn__hover"></div>
			</div>
		</div>
	);
}

export default WhatWeDoCard;
