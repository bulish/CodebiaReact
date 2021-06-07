import React, { useState } from 'react';
import gsap from 'gsap';

import Menu from './components/menu/menu';
import Title from './components/title/Title';
import Logo from './components/logo/Logo';
import FixedDiv from './components/fixedDiv/FixedDiv';
import AboutUs from './components/aboutUs/aboutUs';
import WhatWeDo from './components/whatWeDo/whatWeDo';
import WorkWithUs from './components/workWithUs/workWithUs';

import './main.scss';

import data from './data';
import data2 from './data2';

function App() {
	const [cards, setCards] = useState(data());
	const [works, setWorks] = useState(data2());
	const [menuStatus, setMenuStatus] = useState(false);
	const [menu, setMenu] = useState(false);
	const menuFunction = () => {
		var tl = gsap.timeline({ paused: true });
		if(!menu){
			tl.to('.firstSpan', {rotation: 45, ease: 'linear', duration: 0.25})
			tl.to('.secondSpan', { opacity: 0, ease: 'linear', duration: 0.25 }, '<');
			tl.to('.thirdSpan', { rotation: -45 , ease: 'linear', duration: 0.25}, "<");
			tl.fromTo('.menu', {scale: 0}, {scale:1}, "<");
			tl.fromTo('.menu', {y:'-150%'}, { y: 0});
			tl.fromTo('.menu__div', {opacity: 0}, { opacity: 1});
			tl.fromTo('.menu__div', {display: 'none', scale: 1}, { display: 'block', scale: 100, duration: 2.5 });
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
		<div className="App">
			<Menu menuFunction={menuFunction}/>
			<Logo />
			<FixedDiv menuStatus={menuStatus} setMenuStatus={setMenuStatus} menuFunction={menuFunction}/>
			<Title />
			<AboutUs />
			<WhatWeDo cards={cards} setCards={setCards} />
			<WorkWithUs works={works} setWorks={setWorks} />
		</div>
	);
}

export default App;
