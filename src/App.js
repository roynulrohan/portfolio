import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            if (location.state.scrollTo) {
                scroller.scrollTo(location.state.scrollTo, { smooth: true, duration: 400 });
                console.log(location.state.scrollTo);
            }
        }
    }, [location.state]);

    return (
        <div className='app'>
            <div className='main'> </div>
            <Nav />

            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Main />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
