import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
    const location = useLocation();

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
