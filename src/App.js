import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';

/* Page Imports */
import Nav from './pages/Nav'
import About from './pages/About'
import Skills from './pages/Skill'
import Project from './pages/Project'
import Social from './pages/Contact'

/* Style Imports */
import theme from './theme'
import '@fontsource/roboto/400.css'
import '@fontsource/nunito/500.css'

function App() { 

  const [currentTab, setCurrentTab ] = useState('');
  const [currentW , setCurrentW] = useState(window.innerWidth);

  function resize() {
    setCurrentW(window.innerWidth)
  }

  // Calls the resize function when ever the window width Changes
  window.onresize = resize;

  function renderTab(name) { 
    switch (name) {
    case 'Skills': 
      return <Skills/>
    case 'Projects': 
      return <Project />
    case 'Contacts' :
      return <Social/>
    default :
      return <About currentW={currentW}/>
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <header>
        <Nav setCurrentTab={setCurrentTab} currentTab={currentTab} currentW={currentW}/>
      </header>
      <main>
        {renderTab(currentTab.tab)}
      </main>
    </ChakraProvider>
  );
}

export default App;
