import React from 'react';
import WorkWithUsWorks from './workWithUsWorks';;

function WorkWithUs({ works, setWorks, work }) {
	return (
		<section id="workWithUs">
			<div className="workWithUs__title">
				<span>Work</span> with <span>us</span>
			</div>
			<div className="workWithUs__subtitle">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim
				ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
				quia consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt.
			</div>
			<div className="workWithUs__container">
				{works.map(work => (
					<WorkWithUsWorks
						key={work.id}
						id={work.id}
						works={works}
						work={work}
						setWorks={setWorks}
					/>
				))}
			</div>
		</section>
	);
}

export default WorkWithUs;
