import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Assets/chat.png";
import B_Nav_Arrow from "../../Assets/Black_Nav_Arrow.png";

const Techoversity = () => {
    return (
        <>
            <section className="techoversity">
                <Navbar />
                <div className="techoversity_inner flex jc ac col">
                    <h1>Techoversity</h1>
                    <div className="flex jc ac techoversity_content">
                        <h2>
                            As thought leaders we produce valuable educational
                            content for you to enjoy.
                        </h2>
                    </div>
                    <div className="techoversity_button flex">
                        <input
                            className="pointer"
                            type="button"
                            value="LET'S EXPLORE"
                        />
                    </div>
                </div>
                <div className="techoversity_footer flex jsb ac row">
                    <h3>Home &gt; Techoversity</h3>
                    <div className='down_img_out'>
                        <img className="down_img pointer" src={B_Nav_Arrow} alt="" />
                    </div>
                    <div className='chat_img_out flex'>
                        <img className="chat_img pointer" src={Chat} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Techoversity;
