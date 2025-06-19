import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <Box style={{marginTop:54}}>
      <Home/>
      </Box>
    </ContextProvider>
  );
}

export default App;
