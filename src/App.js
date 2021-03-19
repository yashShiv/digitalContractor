import './App.css';
<<<<<<< HEAD
import HomePage from './components/home/Home';

function App() {
  return (
    <div className="App">
    <HomePage></HomePage>
=======
import Login from './components/login/Login';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

      </Switch>

    </BrowserRouter>
>>>>>>> f57a39a3162b8a4670cec1d618c21e8dff94b7f9
    </div>
  );
}

export default App;
