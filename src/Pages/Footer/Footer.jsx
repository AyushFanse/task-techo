import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import B_Nav_Arrow from "../../Assets/Up_Arrow_black.png";
import Social_Media from "../../Assets/Social_Media_Icons.png";
import { goTo } from "../../Components/ReusedFunctions/ReusedFunctions";
import Logo_Techo from "../../Assets/Logo_Techo.png";

const Footer = () => {
    return (
        <div className="container section" id="footer">
            <Navbar />
            <div className="footer_outer flex jc ac col">
                <div className="service_footer flex jc ac">
                    <div className="down_img_out">
                        <img
                            className="down_img pointer"
                            src={B_Nav_Arrow}
                            alt=""
                            onClick={() => {
                                goTo("co_create");
                            }}
                        />
                    </div>
                </div>
                <div className="footer_data_out flex jsb ac row">
                    <ul className='flex jc ac row'>
                        <li className='flex'>
                            <ul className='footer_data_inner flex jsb as col'>
                                <li><h3>Location</h3></li>
                                <li id='Menu_underline'>United State</li>
                                <li id='Menu_underline'>India</li>
                                <li id='Menu_underline'>Singapore</li>
                                <li id='Menu_underline'>Indonesia</li>
                                <li id='Menu_underline'>Mauritius</li>
                                <li id='Menu_underline'>Ireland</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='footer_data_inner flex jsb as col'>
                                <li><h3>Services</h3></li>
                                <li id='Menu_underline'>Enterprise Cloud</li>
                                <li id='Menu_underline'>Product Innovation</li>
                                <li id='Menu_underline'>Real World Al</li>
                                <li id='Menu_underline'>Google Cloud Partner</li>
                                <li id='Menu_underline'>User Experience Design</li>
                                <li id='Menu_underline'>Co-Create/App Development</li>
                            </ul>
                        </li>
                    </ul>
                    <div className='footer_logo'>
                        <img src={Logo_Techo} alt="" />
                    </div>
                    <ul className='flex jc ac row'>
                        <li>
                            <ul className='footer_data_inner flex jsb as col'>
                                <li><h3>Resources</h3></li>
                                <li id='Menu_underline'>Blogs</li>
                                <li id='Menu_underline'>Case Studies</li>
                                <li id='Menu_underline'>Press</li>
                                <li id='Menu_underline'>Careers</li>
                                <li id='Menu_underline'>Contact Us</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='footer_data_inner flex jsb as col'>
                                <li><h3>Contact Us</h3></li>
                                <li id='footer_address'>HQ <br/> 222 Broadway,<br/> 19th Floor,<br/> New York NY 10038</li>
                                <li id='Menu_underline'>inovate@techolution.com</li>
                                <li>
                                    <div className='footer_s_icon'>
                                        <img src={Social_Media} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
