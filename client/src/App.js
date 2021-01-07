import './sass/App.scss';
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
                    <hr/>
                    <About />
                    <hr/>
                    <div
                        className='d-flex flex-column justify-content-center align-items-center'
                        style={{ height: '100vh' }}
                    ></div>
                </>
            </CSSTransition>
        </>
    );
}

export default App;
