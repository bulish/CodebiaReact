import React from 'react';

function Menu({menuFunction}) {
	return (
		<div className="menu">
            <div className="menu__div"></div>
			<div className="menu__container">
                <ul className="menu__ul">
                    <li><span>01</span><a href="#" className="menuFunction" onClick={menuFunction}>Who we are</a></li>
                    <li><span>02</span><a href="#" className="menuFunction" onClick={menuFunction}>What we do</a></li>
                    <li><span>03</span><a href="#" className="menuFunction" onClick={menuFunction}>Work with us</a></li>
                    <li><span>04</span><a href="#" className="menuFunction" onClick={menuFunction}>Contact</a></li>
                </ul>
            </div>
		</div>
	);
}

export default Menu;
