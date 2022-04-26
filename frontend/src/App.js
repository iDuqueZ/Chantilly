import {BrowserRouter as Router,Route} from 'react-router-dom';
import ConInicio from "./components/conInicio";
import LoginUser from "./components/LoginUsers";
import RegisterUser from './components/RegisterUser';
import NavBar from './components/NavBar'
import Carro from './components/Carro';


function App() {
  return (
      <Router>
        <NavBar/>
        <Route path='/' exact component={LoginUser}/>
        <Route path='/register' exact component={RegisterUser}/>
        <Route path='/home' exact component={ConInicio}/>
        <Route path='/cart' exact component={Carro}/>
      </Router>
  );
}

export default App;
