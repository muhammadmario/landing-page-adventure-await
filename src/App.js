import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/pages/Home'
import Services from './component/pages/Services'
import Products from './component/pages/Products'
import SignUp from './component/pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/Products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
