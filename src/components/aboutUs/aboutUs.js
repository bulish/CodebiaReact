import React, { useRef, useEffect } from 'react';
import image from './aboutUs.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 

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
	
	
	const testRef = useRef(null);
	useEffect(() => { 
    	const element = testRef.current;
		gsap.from(
				element.querySelector('.aboutUs__container__left'),
				{
					x: -1000,
					scrollTrigger: {
						trigger: element.querySelector('.aboutUs__container'),
						start: 'top-=300 top',
						end: '20%',
						scrub: true,
						pin: true,
					},
				},
			);
	}, []);
	useEffect(() => { 
    	const element = testRef.current;
		gsap.fromTo(
				element.querySelector('.aboutUs__works'),
				{
					scale: 0.8,
				},
				{
					scale: 1,
					scrollTrigger: {
						trigger: element.querySelector('.aboutUs__works'),
						start: 'top-=100 top',
						end: '50%',
						scrub: true,
						pin: true,
					},
				},
			);
	}, []);

	return (
		<section id="aboutUs" ref={testRef}>
			<div className="aboutUs__container">
				<div className="aboutUs__container__left">
					<div className="aboutUs__title">Who we are</div>
					<div className="aboutUs__container__subtitle">- Codebia</div>
					<div className="aboutUs__container__left__text">
						Lorem ipsum dolor sit, amet conser adipig elit. Tempor obecati blait
						et! Magnam debitis vitae deleniti officiis, consequr odit esse
						blatiis vtatis illo placeat volupbus neque? Accuium possimus eaque
						conetur autem sunt quibam, corporis volibus cum explicabo quis
						ducimus quidem dnctio fugiat voltes labore. Eveniet ipsum eaque
						magni rerum neque.
					</div>
					<div
						className="aboutUs__container__btn"
						onMouseEnter={mouseEnterBtn}
						onMouseLeave={mouseLeaveBtn}
					>
						<a href="#">See Our Works</a>
						<div className="aboutUs__container__btn__div"></div>
					</div>
				</div>
				<div className="aboutUs__container__right">
					<img src={image} alt="aboutUs" />
				</div>
			</div>
			<div className="aboutUs__works">
				<div
					className="aboutUs__works__first"
					onMouseEnter={mouseEnterFirst}
					onMouseLeave={mouseLeaveFirst}
				>
					<div className="aboutUs__works__first__div"></div>
					<div className="aboutUs__works__first__text">
						<a href="#">
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
