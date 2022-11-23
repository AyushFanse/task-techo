import Techoversity from "../Techoversity/Techoversity";
import Services from "../Services/Services";
import CoCreate from "../CoCreate/CoCreate";
import BackSection from "../CoCreate/ParallaxBG";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div id="fullpage">
            <Techoversity />
            <Services />
            <CoCreate />
            <Footer />
            <BackSection />
        </div>
    );
}

export default App;
