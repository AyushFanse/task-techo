import React from "react";
import service_data from "../../Data/Blogs.json";

const Services = () => {
    return (
        <section>
            <div className="services_nav_outer">
                <nav className="services_nav">
                    <ul className="services_nav_inner flex jc ac row">
                        <li>
                            <button className="services_nav_tab active">
                                BLOGS
                            </button>
                        </li>
                        <li>
                            <button className="services_nav_tab">VIDEOS</button>
                        </li>
                        <li>
                            <button className="services_nav_tab">BOOKS</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="card_container flex jc ac">
                {service_data.map((item, i) => (
                    <div className="card_outer">
                        <div key={item.title + i}>
                            <div className='card'>
                                <div className="card_img">
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                                <button className="read_btn">Read more</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
