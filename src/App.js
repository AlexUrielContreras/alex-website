import { ChakraProvider} from '@chakra-ui/react';
import Nav from './componets/Nav'
import About from './pages/About'

function App() {
  return (
    <ChakraProvider>
      <header>
        <Nav />
      </header>
      <main>
        <About />
      </main>
    </ChakraProvider>
  );
}

export default App;
