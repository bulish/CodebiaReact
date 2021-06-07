import React from 'react';
import image from './aboutUs.jpeg';
import gsap from 'gsap';

function AboutUs() {

	// see our works button
	const mouseEnterBtn = () => {
		gsap.to('.aboutUs__container__btn__div', { x: '100%' });
	}

	const mouseLeaveBtn = () => {
		gsap.to('.aboutUs__container__btn__div', { x: '0%' });
	}

	// 	works

	const mouseEnterFirst = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__first__div', { x: 0 });
		timeline.to('.aboutUs__works__first__text', { y: 0 }, "<");
	}

	const mouseLeaveFirst = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__first__text', { y: '150%' }, "<");
		timeline.to('.aboutUs__works__first__div', { x: '-100%' });
	}

	const mouseEnterSecond = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__second__div', { x: 0 });
		timeline.to('.aboutUs__works__second__text', { y: 0 }, "<");
	}

	const mouseLeaveSecond = () => {
		var timeline = gsap.timeline();
		timeline.to('.aboutUs__works__second__text', { y: '150%' }, "<");
		timeline.to('.aboutUs__works__second__div', { x: '-100%' });
	}

    return (
			<section id="aboutUs">
				<div className="aboutUs__container">
					<div className="aboutUs__container__left">
						<div className="aboutUs__title">Who we are</div>
						<div className="aboutUs__container__subtitle">- Codebia</div>
						<div className="aboutUs__container__left__text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Temporibus obcaecati blanditiis et! Magnam debitis vitae deleniti
							officiis, consequatur odit esse blanditiis veritatis illo placeat
							voluptatibus neque? Accusantium possimus eaque consectetur autem
							sunt quibusdam, corporis voluptatibus cum explicabo quis ducimus
							quidem distinctio fugiat voluptates labore. Eveniet ipsum eaque
							magni rerum neque.
						</div>
						<div className="aboutUs__container__btn" onMouseEnter={mouseEnterBtn} onMouseLeave={mouseLeaveBtn}>
							<a href="#">See Our Works</a>
							<div className="aboutUs__container__btn__div"></div>
						</div>
					</div>
					<div className="aboutUs__container__right">
						<img src={image} alt="aboutUs" />
					</div>
				</div>
				<div className="aboutUs__works">
					<div className="aboutUs__works__first" onMouseEnter={mouseEnterFirst} onMouseLeave={mouseLeaveFirst}>
						<div className="aboutUs__works__first__div"></div>
						<div className="aboutUs__works__first__text">
							<a href="#">
								<p>Web Development</p>View &rarr;
							</a>
						</div>
					</div>
					<div className="aboutUs__works__second" onMouseEnter={mouseEnterSecond} onMouseLeave={mouseLeaveSecond}>
						<div className="aboutUs__works__second__div"></div>
						<div className="aboutUs__works__second__text">
							<a href="#">
								<p>App Development</p>View &rarr;
							</a>
						</div>
					</div>
				</div>
			</section>
		);
}

export default AboutUs;
