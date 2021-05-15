import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Land from './Land';
import Redirect from './Redirect'
import Home from './Home';
import Bands from './Bands';
import Details from './Details';
import ProtectedRoute from './utils/ProtectedRoute'
import AlbumDetails from './AlbumDetails';
import is_expired from './utils/is_expired';

function App() {
  // const expiryTime = localStorage.getItem('expiry_time');
  // const timeNow = new Date().getTime();
  // const is_expired = timeNow >= expiryTime;
  // console.log(timeNow);
  // console.log(expiryTime);
  // console.log(is_expired); 
  const expired  = is_expired();
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><Land /></Route>
          {/* <ProtectedRoute  path='/home' token={token}><Home /></ProtectedRoute> */}
          <ProtectedRoute  path='/home' token={expired} component={Home}/>
          <ProtectedRoute path='/bands' token={expired} component={Bands}/>
          <ProtectedRoute path='/band-details/:id' token={expired} component={Details}/>
          <ProtectedRoute path='/album-details/:idArtist/:idAlbum' token={expired} component={AlbumDetails}/>
          <Route path='/redirect' component={Redirect} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
