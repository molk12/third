import   Image from './components/profile/ProfilePhoto'
import { Names }from './components/profile/name'
import Myadd from './components/profile/adress';
import './App.css';

function App() {
  return (
    <div className="App">
     <Image/> 
    <Names/> 
    <Myadd/>
    </div>
  );
}

export default App;
