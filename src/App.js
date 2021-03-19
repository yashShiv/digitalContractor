import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import About from './components/about/About';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
