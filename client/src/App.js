import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainRoutes } from './components/Routes/MainRoutes';

function App() {
  return (
    <div>
     <Navbar/>
     <MainRoutes/>
    </div>
  );
}

export default App;
