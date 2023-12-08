import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AmigoProject from './pages/AmigoProject';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import StocksProject from './pages/StocksProject';
import StudentAPIProject from './pages/StudentAPIProject';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, { smooth: true, duration: 400 });
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
                <Route exact path='/projects/studentdatabase-api' element={<StudentAPIProject />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
