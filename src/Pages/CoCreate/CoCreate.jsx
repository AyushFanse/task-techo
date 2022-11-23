import React from "react";
import B_Nav_Arrow from "../../Assets/UP_Arrow.png";
import { goTo } from "../../Components/ReusedFunctions/ReusedFunctions";

const CoCreate = () => {
    return (
        <>
            <div className="container section flex jc ac col" id="CC_outer">
                <div className="CC_title">Let's Connect</div>
                <div className="CC_button flex">
                    <input
                        className="pointer"
                        type="button"
                        value="LET'S EXPLORE"
                    />
                </div>
                <div className="down_img_out pa">
                    <img
                        className="down_img pointer"
                        src={B_Nav_Arrow}
                        alt=""
                        onClick={() => {
                            goTo("footer");
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default CoCreate;
