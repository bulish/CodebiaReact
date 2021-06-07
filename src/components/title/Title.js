import React from "react";
import gsap from "gsap";

function Title(){

	// title btn

	const mouseEnterBtn = () => {
		gsap.to('.box1__btn__hover', { x: '0' });
	}

	const mouseLeaveBtn = () => {
		gsap.to('.box1__btn__hover', { x: '-100%' });
	}

	// yellow divs

		// var box2 = document.querySelector('.box2');
		// var box2Height = window.getComputedStyle(box2).getPropertyValue('height');
		// box2Height = box2Height.slice(0, box2Height.indexOf('p'));
		// var box2Width = window.getComputedStyle(box2).getPropertyValue('width');
		// box2Width = box2Width.slice(0, box2Width.indexOf('p'));
		// var firstYellowDiv = document.querySelector('.box2__yellowDiv');
		// var widthYellowDiv = (box2Height ** 2 + box2Width ** 2) ** 0.5;
		// firstYellowDiv.style.width = widthYellowDiv + 'px';
	
		// var box3 = document.querySelector('.box3');
		// var box3Height = window.getComputedStyle(box3).getPropertyValue('height');
		// box3Height = box3Height.slice(0, box3Height.indexOf('p'));
		// var box3Width = window.getComputedStyle(box3).getPropertyValue('width');
		// box3Width = box3Width.slice(0, box3Width.indexOf('p'));
		// var secondYellowDiv = document.querySelector('.box3__yellowDiv');
		// var widthYellowDiv = (box3Height ** 2 + box3Width ** 2) ** 0.5;
		// secondYellowDiv.style.width = widthYellowDiv + 'px';


	const mouseEnterBox2 = () => {
		gsap.to('.box2__yellowDiv', { y: '0', x: 0 });
		gsap.to('.box2__text', { color: 'black' });
	}

	const mouseLeaveBox2 = () => {
		gsap.to('.box2__yellowDiv', { y: '100%' });
		gsap.to('.box2__text', { color: 'white' });
	}

	const mouseEnterBox3 = () => {
		gsap.to('.box3__yellowDiv', { y: '0', x: 0 });
		gsap.to('.box3__text', { color: 'black' });
	};

	const mouseLeaveBox3 = () => {
		gsap.to('.box3__yellowDiv', { y: '100%' });
		gsap.to('.box3__text', { color: 'white' });
	};

	// box1

	const onLoadBox1 = () => {
		gsap.fromTo('.box1', {scale: 1.25}, {scale: 1});
	}

	window.addEventListener("load", onLoadBox1);
	return (
		<div id="title">
			<div className="title__container">
				<div className="box1">
					<div className="box1__text">
						<div className="box1__title">
							<span>CODE</span> WITH US <br /> IN <span>CODEBIA</span>
						</div>
						<div className="box1__btn" onMouseEnter={mouseEnterBtn} onMouseLeave={mouseLeaveBtn}>
							<a href="#aboutUs">MORE INFO</a>
							<div className="box1__btn__hover"></div>
						</div>
					</div>
				</div>
				<div className="box2" onMouseEnter={mouseEnterBox2} onMouseLeave={mouseLeaveBox2}>
					<div className="box2__text">
						<a href="#aboutUs">
							About Us <div className="box2__text__arrow">&rarr;</div>
						</a>
					</div>
					<div className="box2__yellowDiv"></div>
				</div>
				<div className="box3"  onMouseEnter={mouseEnterBox3} onMouseLeave={mouseLeaveBox3}>
					<div className="box3__text">
						<a href="#text">
							Contact <div className="box3__text__arrow">&rarr;</div>
						</a>
					</div>
					<div className="box3__yellowDiv"></div>
				</div>
			</div>
		</div>
	);
}

export default Title;