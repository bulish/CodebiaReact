import React from 'react';
import image from './aboutUs.jpeg';
import gsap from 'gsap';

function AboutUs() {
	const mouseEnterBtn = () => {
		gsap.to('.aboutUs__container__btn__div', { x: '100%' });
	};

	const mouseLeaveBtn = () => {
		gsap.to('.aboutUs__container__btn__div', { x: '0%' });
	};

	// 	works

	const mouseEnterFirst = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__first__div', { x: 0 });
		timeline.to('.aboutUs__works__first__text', { y: 0 }, '<');
	};

	const mouseLeaveFirst = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__first__text', { y: '150%' }, '<');
		timeline.to('.aboutUs__works__first__div', { x: '-100%' });
	};

	const mouseEnterSecond = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__second__div', { x: 0 });
		timeline.to('.aboutUs__works__second__text', { y: 0 }, '<');
	};

	const mouseLeaveSecond = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__second__text', { y: '150%' }, '<');
		timeline.to('.aboutUs__works__second__div', { x: '-100%' });
	};

	return (
		<section id="aboutUs" data-scroll-section>
			<div className="aboutUs__container">
				<div className="aboutUs__container__left">
					<div
						className="aboutUs__title"
						data-scroll
						data-scroll-speed="1.5"
						data-scroll-direction="vertical"
					>
						Who we are
					</div>
					<div
						className="aboutUs__container__subtitle"
						data-scroll
						data-scroll-speed="1.5"
						data-scroll-direction="vertical"
					>
						- Codebia
					</div>
					<div
						className="aboutUs__container__left__text"
						data-scroll
						data-scroll-speed="1.5"
						data-scroll-direction="vertical"
					>
						Lorem ipsum dolor sit, amet conser adipig elit. Tempor obecati blait
						et! Magnam debitis vitae deleniti officiis, consequr odit esse
						blatiis vtatis illo placeat volupbus neque? Accuium possimus eaque
						conetur autem sunt quibam, corporis volibus cum explicabo quis
						ducimus quidem dnctio fugiat voltes labore. Eveniet ipsum eaque
						magni rerum neque.
					</div>
					<div
						className="aboutUs__container__btn"
						data-scroll
						data-scroll-speed="1.5"
						data-scroll-direction="vertical"
						onMouseEnter={mouseEnterBtn}
						onMouseLeave={mouseLeaveBtn}
					>
						<a href="#whatWeDo" data-scroll-to>
							See Our Works
						</a>
						<div className="aboutUs__container__btn__div"></div>
					</div>
				</div>
				<div className="aboutUs__container__right">
					<img src={image} alt="aboutUs" />
				</div>
			</div>
			<div
				className="aboutUs__works"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-positon="right"
				data-scroll-speed="2"
			>
				<div
					className="aboutUs__works__first"
					onMouseEnter={mouseEnterFirst}
					onMouseLeave={mouseLeaveFirst}
				>
					<div className="aboutUs__works__first__div"></div>
					<div className="aboutUs__works__first__text">
						<a href="#text" data-scroll-to>
							<p>Web Development</p>View &rarr;
						</a>
					</div>
				</div>
				<div
					className="aboutUs__works__second"
					onMouseEnter={mouseEnterSecond}
					onMouseLeave={mouseLeaveSecond}
				>
					<div className="aboutUs__works__second__div"></div>
					<div className="aboutUs__works__second__text">
						<a href="#text" data-scroll-to>
							<p>App Development</p>View &rarr;
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
