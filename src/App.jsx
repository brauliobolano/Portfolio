import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Timeline from './components/Timeline/Timeline'
import Wellcome from './components/Wellcome/Wellcome'
import Projects from './components/Projects/Projects'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navigation /><Wellcome /></>} />
          <Route path="/projects" element={<><Navigation /><Projects /></>} />
          <Route path="/contact" element={<><Navigation /><Contact /></>} />
          <Route path="/timeline" element={<><Navigation /><Timeline /></>} />
          
{/*     <Projects /> */}
{/*     < Contact /> */}
{/*     <Timeline /> */} 
{/*     <div className='absolute bottom-0 w-full'>
      <Footer />
    </div> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
