import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Menu from './components/menu/menu';
import Title from './components/title/Title';
import FixedDiv from './components/fixedDiv/FixedDiv';
import AboutUs from './components/aboutUs/aboutUs';
import WhatWeDo from './components/whatWeDo/whatWeDo';
import WorkWithUs from './components/workWithUs/workWithUs';
import Text from './components/text/text';

import './main.scss';
import './components/base.css';

import data from './data';

function App() {
	const containerRef = useRef(null);
	const loadingRef = useRef();
	const contentRef = useRef();
	const [cards, setCards] = useState(data());
	const [menuStatus, setMenuStatus] = useState(false);
	const [menu, setMenu] = useState(false);
	const menuFunction = () => {
		let tl = gsap.timeline({ paused: true });
		if(!menu){
			tl.to('.firstSpan', {rotation: 45, ease: 'linear', duration: 0.25})
			tl.to('.secondSpan', { opacity: 0, ease: 'linear', duration: 0.25 }, '<');
			tl.to('.thirdSpan', { rotation: -45 , ease: 'linear', duration: 0.25}, "<");
			tl.fromTo('.menu', {scale: 0}, {scale:1}, "<");
			tl.fromTo('.menu', {y:'-150%'}, { y: 0}, "<");
			tl.fromTo('.menu__div', {opacity: 0}, { opacity: 1}, '<');
			tl.fromTo('.menu__div', {display: 'none', scale: 1}, { display: 'block', scale: 100, duration: 2.5 }, '+=0.1');
			tl.fromTo('.menu__container', {opacity: 0}, { opacity: 1 }, '-=2');
		} else {
			tl.to('.firstSpan', { rotation: 0, ease: 'linear', duration: 0.25 });
			tl.to('.secondSpan', { opacity: 1, ease: 'linear', duration: 0.25 }, '<');
			tl.to('.thirdSpan', { rotation: 0, ease: 'linear', duration: 0.25 }, '<');
			tl.to('.menu', { scale:0, duration: 1.25 }, "<");
			tl.to('.menu__div', { opacity: 0, display: 'none'});
		}
		tl.play();
		setMenu(!menu);
	};
	useEffect(() => {
		let timeline = gsap.timeline();
		timeline.fromTo(
			[loadingRef.current.lastChild],
			{ x: -60, duration: 1.2, repeat: 3, yoyo: true },
			{ x: 60, repeat: 3, yoyo: true, duration: 1.2 },
			);
		timeline.to([loadingRef.current.lastChild], {
				x: 0,
				duration: 0.6,
			});
		timeline.to(
			[loadingRef.current],
			{ autoAlpha: 0, opacity: 0, visibility:'hidden', duration: 1.2},
		);
		timeline.fromTo(
			[contentRef.current],
			{ autoAlpha: 1, opacity: 0, display: 'none', duration: 1.2 },
			{ opacity: 1, display: 'block', duration: 1.2 },
		'-=0.5');
		timeline.to([loadingRef.current], {x: '-2000vw'});
		timeline.to(
			'.box1__text',1,
			{
				duration: 3.5,
				ease: 'sine.out',
				'--mask': 'linear-gradient(-45deg, transparent -50%, black 0%)',
			}, '-=0.5'
		);
	}, []);
	return (
		<div>
			<div className="loading" ref={loadingRef}>
				<h1>Loading</h1>
				<div className="line"></div>
			</div>
			<div className="content" ref={contentRef}>
				<LocomotiveScrollProvider
					options={{ smooth: true }}
					watch={['Virtual Scroll']}
					containerRef={containerRef}
				>
					<div ref={containerRef} data-scroll-container>
						<Menu menuFunction={menuFunction} />
						<FixedDiv
							menuStatus={menuStatus}
							setMenuStatus={setMenuStatus}
							menuFunction={menuFunction}
						/>
						<Title />
						<AboutUs />
						<WhatWeDo cards={cards} setCards={setCards} />
						<WorkWithUs />
						<Text />
					</div>
				</LocomotiveScrollProvider>
			</div>
		</div>
	);
}

export default App;
