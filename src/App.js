import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Land from './Land';
import Redirect from './Redirect'
import Home from './Home';
import Bands from './Bands';
import Details from './Details';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path='/'><Land /></Route> */}
          <Route path='/'><Home /></Route>
          <Route path='/bands'><Bands /></Route>
          <Route path='/band-details'><Details /></Route>
          <Route path='/redirect'><Redirect /></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
