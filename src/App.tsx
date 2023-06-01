import './App.css';
import TextFiled from './textFiled';
import Container from '@mui/material/Container';
import ButtonAppBar from './header';
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ButtonAppBar />
      <p></p>
      <Container maxWidth="md">
        <TextFiled />
      </Container>
    </div>
    </QueryClientProvider>
  );
}

export default App;
