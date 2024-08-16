// Layout.js
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';

function Layout() {
    return (
        <div className='app'>
            <div className='main'> </div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
