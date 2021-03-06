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

	return (
		<div id="title" data-scroll-section>
			<div className="title__container">
				<div className="box1">
					<div className="box1__text" data-scroll data-scroll-speed="5">
						<div className="box1__title">
							<span>CODE</span> WITH US <br /> IN <span>CODEBIA</span>
						</div>
						<div
							className="box1__btn"
							onMouseEnter={mouseEnterBtn}
							onMouseLeave={mouseLeaveBtn}
						>
							<a href="#aboutUs" data-scroll-to>
								MORE INFO
							</a>
							<div className="box1__btn__hover"></div>
						</div>
					</div>
				</div>
				<div
					className="box2"
					onMouseEnter={mouseEnterBox2}
					onMouseLeave={mouseLeaveBox2}
				>
					<div className="box2__text">
						<a href="#aboutUs" data-scroll-to>
							About Us <div className="box2__text__arrow">&rarr;</div>
						</a>
					</div>
					<div className="box2__yellowDiv"></div>
				</div>
				<div
					className="box3"
					onMouseEnter={mouseEnterBox3}
					onMouseLeave={mouseLeaveBox3}
				>
					<div className="box3__text">
						<a href="#text" data-scroll-to>
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