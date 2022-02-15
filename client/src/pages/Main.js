import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import TabStyleView from '../components/TabStyleView';

const Main = () => {
    return (
        <>
            <Hero />
            <TabStyleView className='mb-44'>
                <Projects />
                <Contact />
            </TabStyleView>
        </>
    );
};

export default Main;
