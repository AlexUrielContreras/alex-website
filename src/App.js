import { useState } from 'react'
import { ChakraProvider, Link} from '@chakra-ui/react';
import Nav from './pages/Nav'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Projects'
import Social from './pages/Contacts'
import theme from './theme'
import '@fontsource/roboto/400.css'
import '@fontsource/nunito/500.css'

function App() { 
  const tabs = ['Skills', 'Projects', 'Resume', 'Contacts'];

  const [currentTab, setCurrentTab ] = useState('');
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
  console.log(currentTab)

  return (
    <ChakraProvider theme={theme}>
      <header>
        {currentW > 768 && currentTab !== ' ' ?  <Link position='absolute' top='2.5vh' left='3vw' className='nav-title' onClick={() => setCurrentTab(' ')}>Alex Contreras</Link> : null}
        <Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      </header>
      <main>
        {renderTab(currentTab.tab)}
      </main>
    </ChakraProvider>
  );
}

export default App;
