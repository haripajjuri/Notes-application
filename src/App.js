import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Tasks from './components/Tasks';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import CurrrentUser from './components/CurrrentUser'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/tasks/:id' element={<Task/>}/>
        <Route path='/createTask' element={<CreateTask/>}/>
        <Route path='/updateTask/:id' element={<UpdateTask/>}/>
        <Route path='/currentUser' element={<CurrrentUser/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
