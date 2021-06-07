import { v4 as uuidv4 } from 'uuid';
import first from './img/first.jpeg';
import second from './img/second.jpeg';
import third from './img/third.jpeg';
import fourth from './img/fourth.jpeg';

function workWithUsFunction() {
	return [
		{
			image: first,
			subtitle: 'Who do we need',
			title: 'Front-End Web Developer',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
			button: 'More info',
			id: uuidv4(),
		},
		{
			image: second,
			subtitle: 'Who do we need',
			title: 'Web Designer',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
			button: 'More info',
			id: uuidv4(),
		},
		{
			image: third,
			subtitle: 'Who do we need',
			title: 'Full-Stack Developer',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
			button: 'More info',
			id: uuidv4(),
		},
		{
			image: fourth,
			subtitle: 'Who do we need',
			title: 'UX/UI Developer',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
			button: 'More info',
			id: uuidv4(),
		},
	];
}

export default workWithUsFunction;
