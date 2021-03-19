import './App.css';
import Login from './components/login/Login';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import HomePage from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
