import React from 'react';
import WhatWeDoCard from './whatWeDoCard';

function WhatWeDo({cards, setCards}) {

	return (
		<section id="whatWeDo" className="whatWeDoClass" data-scroll-section>
			<div className="whatWeDo__title" data-scroll data-scroll-speed="1.5">
				What <span>we</span> do
			</div>
			<div className="whatWeDo__subtitle" data-scroll data-scroll-speed="1.5">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim
				ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
				quia consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt.
			</div>
			<div className="whatWeDo__container" data-scroll data-scroll-speed="1.5" data-scroll-direction="horizontal">
				{cards.map(card => (
					<WhatWeDoCard
						key={card.id}
						id={card.id}
						cards={cards}
						card={card}
						setCards={setCards}
					/>
				))}
			</div>
		</section>
	);
}

export default WhatWeDo;
