import React, { memo } from "react";
import Techoversity from "../Techoversity/Techoversity";
import Services from "../Services/Services";
import CoCreate from "../CoCreate/CoCreate";
import Footer from "../Footer/Footer";
import FullPageComp, {  Section, SectionsContainer } from "react-fullpage";

const FullPage = () => {
    console.log(FullPageComp)
    let options = {
        activeClass: "active",
        anchors: [Techoversity, Services, CoCreate, Footer],
        arrowNavigation: true,
        className: "SectionContainer",
        delay: 1000,
        navigation: true,
        scrollBar: true,
        sectionClassName: "Section",
        sectionPaddingTop: "0",
        sectionPaddingBottom: "0",
        verticalAlign: true,
    };
    return (
        <>
            <SectionsContainer {...options}>
                <Section>
                    <Techoversity />
                </Section>
                <Section>
                    <Services />
                </Section>
                <Section>
                    <CoCreate />
                </Section>
                <Section>
                    <Footer />
                </Section>
            </SectionsContainer>
        </>
    );
};

export default memo(FullPage);
