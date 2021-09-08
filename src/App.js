import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Provider from './Context/provider';
import Home from './Components/Home';

function App () {
  return (
    <Provider>
      <Router>
        <Switch> 
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
