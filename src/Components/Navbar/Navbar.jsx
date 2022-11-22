import React from "react";
import Menu from "../Menu/Menu";
import Logo_Techo from "../../Assets/Logo_Techo.png"

const Navbar = () => {
    return (
        <nav className="flex row jsb">
            <div>
                <img src={Logo_Techo} alt="" className="logo_img" />
            </div>
            <Menu />
        </nav>
    );
};

export default Navbar;
