import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import B_Nav_Arrow from "../../Assets/Black_Nav_Arrow.png";
import Social_Media from "../../Assets/Social_Media_Icons.png";
import { goTo } from "../../Components/ReusedFunctions/ReusedFunctions";

const Footer = () => {
    return (
        <div className="container" id="footer">
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
                <div>hello</div>
            </div>
        </div>
    );
};

export default Footer;
