import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Timeline from './components/Timeline/Timeline'
import Wellcome from './components/Wellcome/Wellcome'
import Projects from './components/Projects/Projects'

// Partciles is a library that allows us to create animated backgrounds
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

import { useEffect, useState, useMemo } from "react";
function App() { 

  const [isDark, setIsDark] = useState(false);
  const [colorMode, setColorMode] = useState("#C0C4C4");
  const [init, setInit] = useState(false);
  
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        background: {
          gradient: {
            angle: 45,
            start: {
              value: colorMode,
            },
            stop: {
              value: colorMode,
            },
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: colorMode,
          },
          links: {
            color: colorMode,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          
        },
        
        detectRetina: true,
      }),
      [colorMode],
    );
  
    if (init) {
      return (
        <>
        <Router>
        <Routes>
          <Route path="/" element={<>
            <Particles 
              style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
            <Navigation isDark={isDark} setIsDark={setIsDark} setColorMode={setColorMode} />
            <Wellcome />
          </>} />
          <Route path="/projects" element={<>
            <Navigation isDark={isDark} setIsDark={setIsDark} setColorMode={setColorMode} />
            <Projects />
          </>} />
          <Route path="/contact" element={<>
            <Navigation isDark={isDark} setIsDark={setIsDark} setColorMode={setColorMode} />
            <Contact />
          </>} />
          <Route path="/timeline" element={<>
            <Navigation isDark={isDark} setIsDark={setIsDark} setColorMode={setColorMode}/>
            <Timeline />
          </>} />
      </Routes>
    </Router>

      </>
      );
    }
    
  return (
    <>
      
    </>
  )
}

export default App
