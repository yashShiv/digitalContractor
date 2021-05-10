import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// class Appl extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="Appl">
//         <Register/>
//       </div>
//     );
//   }
// }


export default App;

