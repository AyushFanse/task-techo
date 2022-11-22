import React, { memo } from "react";
import Techoversity from "../Techoversity/Techoversity"
import Services from "../Services/Services"
import CoCreate from "../CoCreate/CoCreate"
import Footer from "../Footer/Footer"

const FullPage = () => {
    return (
        <>
            <Techoversity/>
            <Services/>
            <CoCreate/>
            <Footer/>
        </>
    );
};

export default memo(FullPage);
