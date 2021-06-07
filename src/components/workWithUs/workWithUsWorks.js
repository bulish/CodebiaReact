import React from 'react';
// import gsap from 'gsap';

function WhatWeDoCard({ works, setWorks, work }) {

	return (
		<div className="work">
			<div className="work__first">
				<div className="work__subtitle">{work.subtitle}</div>
				<div className="work__title">{work.title}</div>
				<div className="work__text">{work.text}</div>
				<div className="work__btn">
					<a href="#">
						<div className="work__btn__text">{work.button}</div>
						<div className="work__btn__hover"></div>
					</a>
				</div>
			</div>
			<div className="work__second">
				<img src={work.image} alt="" />
			</div>
		</div>
	);
}

export default WhatWeDoCard;
