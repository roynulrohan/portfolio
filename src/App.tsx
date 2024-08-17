import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import ErrorPage from './routes/Error';
import StocksProject from './routes/StocksProject';
import AmigoProject from './routes/AmigoProject';
import StudentAPIProject from './routes/StudentAPIProject';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, { smooth: false });
        }

        return () => {
            scroller.scrollTo('main', { smooth: false });
        }
    }, [location.state]);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/projects/stocks-io' element={<StocksProject />} />
                <Route path='/projects/amigo-chat' element={<AmigoProject />} />
                <Route path='/projects/student-database-api' element={<StudentAPIProject />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default App;
