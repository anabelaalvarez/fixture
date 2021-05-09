import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar           from './components/Navbar';
import TorneosComponent from './components/TorneosComponent';

function App() {
  return (
    <Router>
        <Navbar/>
        
          <Switch>
            <Route path='/torneos' exact component={TorneosComponent} />
            
          </Switch>

      </Router>
  );
}

export default App;
