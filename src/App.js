import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/Home/MainPage/MainPage";
import AuthPrvider from "./Component/context/authPrvider";
import Login from "./Pages/loginRegistration/Login/Login";
import Registration from "./Pages/loginRegistration/Registration/Registration";
import Header from "./Pages/Home/Header/Header";
import Reset from "./Component/Reset/Reset";
import Food from "./Pages/Home/Food/Food";
import Foods from "./Pages/Home/Foods/Foods";
import Footer from "./Pages/Home/Footer/Footer";
import PrivetRoute from "./Component/PrivetRoute/PrivetRoute";

function App() {
  return (
    <div className="App">
      <AuthPrvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <PrivetRoute exact path="/">
              <MainPage></MainPage>
            </PrivetRoute>
            <PrivetRoute path="/home">
              <MainPage></MainPage>
            </PrivetRoute>
            <PrivetRoute path="/food">
              <Foods></Foods>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/reset">
              <Reset></Reset>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthPrvider>
    </div>
  );
}

export default App;
