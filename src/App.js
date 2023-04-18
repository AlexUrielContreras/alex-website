import { useState } from 'react'

/* Page Imports */
import Nav from './pages/Nav'
import About from './pages/About'
import Skills from './pages/Skill'
import Project from './pages/Project'
import Social from './pages/Contact'

function App() { 
  const [currentTab, setCurrentTab ] = useState('HOME');
  const [currentW , setCurrentW] = useState(window.innerWidth);

  function resize() {
    setCurrentW(window.innerWidth)
  }

  // Calls the resize function when ever the window width Changes
  window.onresize = resize;

  function renderTab(name) { 
    switch (name) {
    case 'SKILLS': 
      return <Skills/>
    case 'PROJECTS': 
      return <Project />
    case 'CONTACTS' :
      return <Social/>
    default :
      return <About currentW={currentW}/>
    }
  };

  console.log(currentTab)

  return (
    <>
      <header>
        <Nav setCurrentTab={setCurrentTab} currentTab={currentTab} currentW={currentW}/>
      </header>
      <main>
        {renderTab(currentTab)}
      </main>
    </>
  )
}

export default App;
