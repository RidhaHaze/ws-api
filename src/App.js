import {Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserDetails from './pages/UserDetails';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
<Route path="/" element={<UserList  />} />
<Route path='/userdetails/:id' element={<UserDetails />} />
    </Routes>
    
    </div>
  );
}

export default App;
