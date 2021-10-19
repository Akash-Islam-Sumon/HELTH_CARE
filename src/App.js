import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import Specialists from "./Pages/Specialists/Specialists";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
              </Route>
            <Route exact path='/home'>
              <Home></Home>
              </Route>
           < PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/specialists">
            <Specialists></Specialists>
          </PrivateRoute>
          <PrivateRoute path="/gallery">
            <Gallery></Gallery>
          </PrivateRoute>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
        <Footer></Footer>  
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;