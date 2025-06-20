import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ContextProvider from './context/ContextProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailView from './components/details/DetailView';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
