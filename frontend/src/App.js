import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Education from './pages/Education/Education'
import Projects from './pages/Project/Projects'
import TechStack from './pages/TechStack/TechStack'
import WorkExp from './pages/WorkExp/WorkExp'
import ScrollToTop from 'react-scroll-to-top'

import Tada from 'react-reveal/Tada'
import Mobilenav from './components/MobileNav/Mobilenav'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <ToastContainer />
            <Mobilenav />
            <Layout />
            <div className="container">
                <About />
                <TechStack />
                <Projects />
                <Education />
                <WorkExp />
                <Contact />
            </div>
            <Tada>
                <div className="footer mb-3 ms-3">
                    <h4 className="text-center">
                        {' '}
                        Made by Samarth Valmiki &copy; 2023
                    </h4>
                </div>
            </Tada>
            <ScrollToTop
                smooth
                color="#f29f67"
                style={{ backgroundColor: '#1e1e2c', borderRadius: '80px' }}
            />
        </>
    )
}

export default App
