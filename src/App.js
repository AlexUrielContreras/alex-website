import { useState } from 'react'
import { ChakraProvider} from '@chakra-ui/react';
import Nav from './componets/Nav'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Projects'

function App() { 
  const tabs = ['Skills', 'Projects', 'Resume', 'Socials'];

  const [currentTab, setCurrentTab ] = useState(tabs[0])

  function renderTab(name) {
    console.log(name)
    
    switch (name) {
    case 'Skills': 
      return <Skills />
    case 'Projects': 
      return <Project />
    default :
      return <About />
  }
}
  
  return (
    <ChakraProvider>
      <header>
        <Nav tabs={tabs} setCurrentTab={setCurrentTab}/>
      </header>
      <main>
        {renderTab(currentTab.tab)}
      </main>
    </ChakraProvider>
  );
}

export default App;
