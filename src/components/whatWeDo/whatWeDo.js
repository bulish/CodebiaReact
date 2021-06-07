import React from 'react';
import WhatWeDoCard from './whatWeDoCard';

function WhatWeDo({cards, setCards, card}) {

	return (
		<section id="whatWeDo">
			<div className="whatWeDo__title"><span>What</span> we <span>do</span></div>
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
