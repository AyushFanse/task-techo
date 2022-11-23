import React from "react";
import service_data from "../../Data/Blogs.json";
import B_Nav_Arrow from "../../Assets/Black_Nav_Arrow.png";
import { goTo } from "../../Components/ReusedFunctions/ReusedFunctions";

const Services = () => {
    return (
        <div className="container section" id="service">
            <div className="services_nav_outer">
                <nav className="services_nav">
                    <ul className="services_nav_inner flex jc ac row">
                        <li>
                            <button className="services_nav_tab active pointer">
                                BLOGS
                            </button>
                        </li>
                        <li>
                            <button className="services_nav_tab pointer">
                                VIDEOS
                            </button>
                        </li>
                        <li>
                            <button className="services_nav_tab pointer">
                                BOOKS
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="card_container flex jc ac">
                {service_data.map((item, i) => (
                    <div className="card_outer" key={item.title + i}>
                        <div>
                            <div className="card">
                                <div className="card_img">
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                                <button className="read_btn pointer">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="service_footer flex jc ac">
                <div className="down_img_out">
                    <img
                        className="down_img pointer"
                        src={B_Nav_Arrow}
                        alt=""
                        onClick={() => {
                            goTo("CC_outer");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
