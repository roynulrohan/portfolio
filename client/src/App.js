import './sass/App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}></div>
        </>
    );
}

export default App;
