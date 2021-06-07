import React, { useState } from 'react';
import gsap from 'gsap';
import { TimelineMax } from 'gsap';

function FixedDiv({ menuFunction }) {
	// arrow

	const mouseEnterArrow = () => {
		gsap.to('.arrow', { scale: 1.25 });
	};

	const mouseLeaveArrow = () => {
		gsap.to('.arrow', { scale: 1 });
	};

	return (
		<div className="fixed__div">
			<div className="fixed__div__menu menuFunction" onClick={menuFunction}>
				<input type="checkbox" />
				<span className="firstSpan"></span>
				<span className="secondSpan"></span>
				<span className="thirdSpan"></span>
			</div>
			<div
				className="arrow"
				onMouseEnter={mouseEnterArrow}
				onMouseLeave={mouseLeaveArrow}
			>
				&darr;
			</div>
		</div>
	);
}

export default FixedDiv;
