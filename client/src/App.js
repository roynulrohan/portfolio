import { CSSTransition } from 'react-transition-group';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';

function App() {
    return (
        <>
            <Nav />
            <CSSTransition in={true} appear={true} timeout={400} classNames='fade' unmountOnExit>
                <>
                    <Hero />
                    <About />
                    
                </>
            </CSSTransition>
        </>
    );
}

export default App;
