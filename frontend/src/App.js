import {BrowserRouter as Router,Route} from 'react-router-dom';
import ConInicio from "./components/conInicio";
import LoginUser from "./components/LoginUsers";
import NavBar from './components/NavBar'


function App() {
  return (
      <Router>
        <NavBar/>
        <Route path='/' exact component={LoginUser}/>
        <Route path='/home' exact component={ConInicio}/>
      </Router>
  );
}

export default App;
