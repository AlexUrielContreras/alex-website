import { ChakraProvider, Flex } from '@chakra-ui/react';
import Nav from './componets/Nav'

function App() {
  return (
    <ChakraProvider>
      <header>
        <Nav />
      </header>
    </ChakraProvider>
  );
}

export default App;
