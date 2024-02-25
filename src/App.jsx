import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Wellcome from './components/Wellcome/Wellcome'
function App() {

  return (
    <>
    <Navigation />
    <Wellcome />
    <div className='absolute bottom-0 w-full'>
      <Footer />
    </div>
    </>
  )
}

export default App
