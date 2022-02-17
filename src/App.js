import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import StocksProject from './pages/StocksProject';
import AmigoProject from './pages/AmigoProject';

const App = () => {
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
                <Route exact path='/projects/stocks-io' element={<StocksProject />} />
                <Route exact path='/projects/amigo-chat' element={<AmigoProject />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
