import React from 'react';
import gsap from 'gsap';

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
				<a href="#text">&darr;</a>
			</div>
		</div>
	);
}

export default FixedDiv;
