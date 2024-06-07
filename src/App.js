import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddDoctor from './components/AddDoctor';
import DeleteDoctor from './components/DeleteDoctor';
import SearchDoctor from './components/SearchDoctor';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddDoctor/>}/>        
        <Route path='/search' element={<SearchDoctor/>}/>        
        <Route path='/delete' element={<DeleteDoctor/>}/>        
        <Route path='/view' element={<ViewAll/>}/>        

      </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
