import React from "react";
import Social_Media from "../../Assets/Social_Media_Icons.png"

const Menu = () => {
    const menu_open = () => {
        let menu = document.querySelector(".menu_outer");
        menu.classList.toggle("active");
    };

    return (
        <div className='menu_container'>
            <div
                className="menu_outer flex jse ae col pointer pr"
                onClick={() => {
                    menu_open();
                }}
            >
                <div className="HB flex je"></div>
            </div>
            <div className="menu_content flex jsb ac col pf">
                <ul className='flex jc as col'>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Our Purpose
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Our Unique Value
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Our Expertise
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Google Cloud
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            All Partners
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Success Stories
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Our Team
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Techoversity
                        </div>
                    </li>
                    <li>
                        <div className="menu_items pointer " id='Menu_underline'>
                            Contact Us
                        </div>
                    </li>
                </ul>
                <div className='menu_footer flex jsb ac row'>
                    <h1 id='Menu_underline'>inovate@techolution.com</h1>
                    <div>
                        <img src={Social_Media} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
