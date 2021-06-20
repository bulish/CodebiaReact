import React from 'react';

function WorkWithUs() {
	return (
		<section id="workWithUs" data-scroll-section>
			<div data-scroll data-scroll-speed="1.5" className="workWithUs__title">
				Work <span>with</span> us
			</div>
			<div data-scroll data-scroll-speed="1.5" className="workWithUs__subtitle">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim
				ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
				quia consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt.
			</div>
			<div
				className="workWithUs__works"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-1"
			>
				<div className="works__first">
					<div className="position">
						Website Design <span>+</span>
					</div>
					<div className="position">
						UI/UX Design <span>+</span>
					</div>
					<div className="position">
						Website Development <span>+</span>
					</div>
					<div className="position">
						Insights &amp; Analytics <span>+</span>
					</div>
					<div className="position">
						Research &amp; Discovery
						<span>+</span>
					</div>
					<div className="position">
						Marketing Materials
						<span>+</span>
					</div>
					<div className="position">
						Competitive Analysis
						<span>+</span>
					</div>
				</div>
				<div className="works__second">
					<div className="position">
						Responsive Web Design
						<span>+</span>
					</div>
					<div className="position">
						Content Management
						<span>+</span>
					</div>
					<div className="position">
						Corporate Identity
						<span>+</span>
					</div>
					<div className="position">
						Motion Graphics
						<span>+</span>
					</div>
					<div className="position">
						Content Strategy
						<span>+</span>
					</div>
					<div className="position">
						Presentations
						<span>+</span>
					</div>
					<div className="position">
						SEO Services
						<span>+</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkWithUs;
