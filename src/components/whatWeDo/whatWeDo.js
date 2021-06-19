import React, {useRef, useEffect} from 'react';
import WhatWeDoCard from './whatWeDoCard';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


function WhatWeDo({cards, setCards}) {
	const testRef = useRef(null);
	useEffect(() => {
		const element = testRef.current;
		gsap.fromTo(
			element.querySelector('.whatWeDo__container'),
			{
				scale: 0.8,
			},
			{
				scale: 1,
				scrollTrigger: {
					trigger: element.querySelector('.whatWeDo__container'),
					start: 'top-=350 top',
					end: '-10%',
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
