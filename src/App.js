import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Land from './Land';
import Redirect from './Redirect'
import Home from './Home';
import Bands from './Bands';
import Details from './Details';
import ProtectedRoute from './utils/ProtectedRoute'

function App() {
  const token = localStorage.getItem('params');
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><Land /></Route>
          {/* <ProtectedRoute  path='/home' token={token}><Home /></ProtectedRoute> */}
          <ProtectedRoute  path='/home' token={token} component={Home}/>
          <ProtectedRoute path='/bands' token={token} component={Bands}/>
          <ProtectedRoute path='/band-details/:id' token={token} component={Details}/>
          <Route path='/redirect' token={token} component={Redirect} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
