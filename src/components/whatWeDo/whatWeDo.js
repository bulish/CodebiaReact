import React, {useRef, useEffect} from 'react';
import WhatWeDoCard from './whatWeDoCard';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


function WhatWeDo({cards, setCards}) {
	const testRef = useRef(null);
	useEffect(() => {
		const element = testRef.current;
		let tl = gsap.timeline();
		const bgColor = '#dfc8c8';
		const easing = 'Power0.easeNone';
		tl.fromTo(
			element.querySelectorAll('.top-side'),
			1,
			{
				width: 0,
				background: bgColor,
				mmediateRender: false,
				autoRound: false,
				ease: easing,
			},
			{
				width: '100%',
				background: bgColor,
				scrollTrigger: {
					trigger: element.querySelector('.whatWeDo__subtitle'),
					start: 'top',
					end: '100%',
					scrub: true,
					pin: true,
				},
			},
		);
		tl.fromTo(
			element.querySelectorAll('.right-side'),
			1,
			{
				height: 0,
				background: bgColor,
				immediateRender: false,
				autoRound: false,
				ease: easing,
			},
			{
				height: '100%',
				background: bgColor,
				scrollTrigger: {
					trigger: element.querySelector('.whatWeDo__subtitle'),
					start: 'top',
					end: '100%',
					scrub: true,
					pin: true,
				},
			},
		);
		tl.fromTo(
			element.querySelectorAll('.bottom-side'),
			1,
			{
				width: 0,
				background: bgColor,
				immediateRender: false,
				autoRound: false,
				ease: easing,
			},
			{
				width: '100%',
				background: bgColor,
				scrollTrigger: {
					trigger: element.querySelector('.whatWeDo__subtitle'),
					start: 'top',
					end: '100%',
					scrub: true,
					pin: true,
				},
			},
		);
		tl.fromTo(
			element.querySelectorAll('.left-side'),
			1,
			{
				height: 0,
				background: bgColor,
				immediateRender: false,
				autoRound: false,
				ease: easing,
			},
			{
				height: '100%',
				background: bgColor,
				scrollTrigger: {
					trigger: element.querySelector('.whatWeDo__subtitle'),
					start: 'top',
					end: '100%',
					scrub: true,
					pin: true,
				},
			},
		);
	}, []);

	return (
		<section id="whatWeDo" className="whatWeDoClass" ref={testRef}>
			<div className="whatWeDo__title">What <span>we</span> do</div>
			<div className="whatWeDo__subtitle">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim
				ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
				quia consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt.
			</div>
            <div className="whatWeDo__container">
                {cards.map(card => (
					<WhatWeDoCard key={card.id} id={card.id} cards={cards} card={card} setCards={setCards}/>
				))}
            </div>
		</section>
	);
}

export default WhatWeDo;
