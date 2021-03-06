import React from 'react';

function Menu({menuFunction}) {
	return (
		<div className="menu">
			<div className="menu__div"></div>
			<div className="menu__container">
				<ul className="menu__ul">
					<li>
						<span>01</span>
						<a
							href="#aboutUs"
							className="menuFunction"
							onClick={menuFunction}
							data-scroll-to
						>
							Who we are
						</a>
					</li>
					<li>
						<span>02</span>
						<a
							href="#whatWeDo"
							className="menuFunction"
							onClick={menuFunction}
							data-scroll-to
						>
							What we do
						</a>
					</li>
					<li>
						<span>03</span>
						<a
							href="#workWithUs"
							className="menuFunction"
							onClick={menuFunction}
							data-scroll-to
						>
							Work with us
						</a>
					</li>
					<li>
						<span>04</span>
						<a
							href="#text"
							className="menuFunction"
							onClick={menuFunction}
							data-scroll-to
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Menu;
