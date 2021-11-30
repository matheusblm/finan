import { Switch } from "react-router";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import Initial from "../pages/Initial";
import { Entry } from "../pages/Entry";
import { Route } from "./Route";
import { Signup } from "../pages/Signup";
import SpendLimit from "../pages/Limit";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Initial} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
    <Route exact path="/lancamentos" component={Entry} isPrivate />
    <Route exact path="/limites" component={SpendLimit} isPrivate />
  </Switch>
);
