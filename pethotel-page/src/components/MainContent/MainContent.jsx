import './MainContent.css';

import Hero from '../Hero/Hero'
import Offer from '../Offer/Offer'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Questions from '../FAQ/Questions'

const MainContent = () => {
    
    return (
        <main>
            <Hero />
            <Offer />
            <About />
            <Questions />
            <Contact />
        </main>
    )
};

export default MainContent