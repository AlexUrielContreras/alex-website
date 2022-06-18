import { useState } from 'react'
import { ChakraProvider, Link} from '@chakra-ui/react';
import Nav from './pages/Nav'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Projects'
import Social from './pages/Contacts'

function App() { 
  const tabs = ['Skills', 'Projects', 'Resume', 'Contacts'];

  const [currentTab, setCurrentTab ] = useState(' ');
  const [currentW , setCurrentW] = useState(window.outerWidth);

  function resize() {
    setCurrentW(window.outerWidth)
  }

  // Calls the resize function when ever the window width Changes
  window.onresize = resize;

  function renderTab(name) { 
    switch (name) {
    case 'Skills': 
      return <Skills />
    case 'Projects': 
      return <Project />
    case 'Contacts' :
      return <Social/>
    default :
      return <About />
    }
  };

  return (
    <ChakraProvider>
      <header>
        {currentW > 769 && currentTab !== ' ' ? <Link><h1 className='nav-title' onClick={() => setCurrentTab(' ')}>Alex Contreras</h1></Link> : null}
        <Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      </header>
      <main>
        {renderTab(currentTab.tab)}
      </main>
    </ChakraProvider>
  );
}

export default App;
