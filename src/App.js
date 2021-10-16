import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Breakfast from "./pages/Breakfast/Breakfast";
import Dinner from "./pages/Dinner/Dinner";
import Home from "./pages/Home/Home";
import Lunch from "./pages/Lunch/Lunch";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import TabsNav from "./pages/TabsNav/TabsNav";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/">
            <Home />
          </Route>
          <Route exact path="/tabsNav">
            <TabsNav/>
          </Route>
          <Route exact path="/breakfast">
            <Breakfast />
          </Route>
          <Route exact path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>
        </Switch>
        </AuthProvider>
      </BrowserRouter>    
  );
}

export default App;
