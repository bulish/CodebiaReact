import React, { useState, useRef } from 'react';
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

	const [cards, setCards] = useState(data());
	const [menuStatus, setMenuStatus] = useState(false);
	const [menu, setMenu] = useState(false);
	const menuFunction = () => {
		var tl = gsap.timeline({ paused: true });
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
	return (
		<div>
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
	);
}

export default App;
