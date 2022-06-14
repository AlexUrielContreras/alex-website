import { useState } from 'react'
import { ChakraProvider} from '@chakra-ui/react';
import Nav from './componets/Nav'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Projects'

function App() { 
  const tabs = ['Skills', 'Projects', 'Resume', 'Socials'];

  const [currentTab, setCurrentTab ] = useState(' ')
  console.log(currentTab)

  function renderTab(name) { 
    switch (name) {
    case 'Skills': 
      return <Skills />
    case 'Projects': 
      return <Project />
    default :
      return <About />
  }
};


    let w = window.outerWidth
    const [currentW , setCurrentW] = useState(w)

    function resize() {
      w = window.outerWidth
      setCurrentW(w)
    }
    window.onresize = resize;

  return (
    <ChakraProvider>
      <header>
        {currentW > 1000 && currentTab !== ' ' ? <h1 className='nav-title' onClick={() => setCurrentTab(' ')}>Alex Contreras</h1> : null}
        <Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      </header>
      <main>
        {renderTab(currentTab.tab)}
      </main>
    </ChakraProvider>
  );
}

export default App;
