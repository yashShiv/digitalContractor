import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
