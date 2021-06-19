import React from 'react';
import { gsap } from 'gsap';

function Text() {
	const mouseEnterBtn = () => {
		gsap.to('.text__btn__div', { x: '100%' });
	};

	const mouseLeaveBtn = () => {
		gsap.to('.text__btn__div', { x: '0%' });
	};
	return (
		<section id="text">
			<div className="text__textContainer">
				<div className="subtitle">Codebia</div>
				<div className="basicText">
					Let’s work together to build
					<br />
					something great.
				</div>
				<div
					className="text__btn"
					onMouseEnter={mouseEnterBtn}
					onMouseLeave={mouseLeaveBtn}
				>
					<a href="#">Join us</a>
					<div className="text__btn__div"></div>
				</div>
			</div>
			<div className="circle"></div>
			<div className="contact__container">
				<div className="contact__address">
					<p>Software House</p>
					<p>Jana Pankiewicza 1/6</p>
					<p>00-696 Warsaw, Poland</p>
				</div>
			</div>
			<div className="icons">
				<ul>
					<li>
						<a href="#">Instagram</a>
					</li>
					<li>
						<a href="#">Facebook</a>
					</li>
					<li>
						<a href="#">YouTube</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Text;
