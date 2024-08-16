import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import ErrorPage from './routes/Error';
import StocksProject from './routes/StocksProject';
import AmigoProject from './routes/AmigoProject';
import StudentAPIProject from './routes/StudentAPIProject';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/projects/stocks-io' element={<StocksProject />} />
                    <Route path='/projects/amigo-chat' element={<AmigoProject />} />
                    <Route path='/projects/student-database-api' element={<StudentAPIProject />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
