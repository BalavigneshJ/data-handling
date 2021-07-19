import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Connect from './pages/Connect.js';
import Db from './pages/Db.js';
import TableDetails from './pages/TableDetails';

function App() {
  return (
    <div className="App">
          <Router>
              <Route exact path="/" component={Login}/>
              <Route path="/connect" component={Connect}/>
              <Route path="/db" component={Db}/>
              <Route path="/table" component={TableDetails}/>
          </Router>
    </div>
  );
}

export default App;
