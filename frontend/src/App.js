import {BrowserRouter as Router,Route} from 'react-router-dom';
import ConInicio from "./components/conInicio";
import LoginUser from "./components/LoginUsers";
import RegisterUser from './components/RegisterUser';
import Carro from './components/Carro';
import LoginAdmin from './components/LoginAdmin';
import Dashboard from './components/Dashboard';
import Pedidos from './components/Pedidos';
import Inventario from './components/Inventario';


function App() {
  return (
      <Router>
        <Route path='/' exact component={LoginUser}/>
        <Route path='/register' exact component={RegisterUser}/>
        <Route path='/home' exact component={ConInicio}/>
        <Route path='/cart' exact component={Carro}/>
        <Route path='/admin' exact component={LoginAdmin}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/pedidos' exact component={Pedidos}/>
        <Route path='/inventario' exact component={Inventario}/>
      </Router>
  );
}

export default App;
