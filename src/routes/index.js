import { Switch } from "react-router";
// import { Login } from "../pages/Login";
// import { Dashboard } from "../pages/Dashboard";
// import { Initial } from "../pages/Dashboard";
import { Entry } from "../pages/Entry";
import { Route } from "./Route";
// import { Signup } from "../pages/Signup";
export const Routes = () => (
  <Switch>
    {/* <Route exact path="/" component={Initial} /> */}
    {/* <Route exact path="/" component={Login} />
    <Route exact path="/" component={Signup} /> */}
    {/* <Route exact path="/dashboard" component={Dashboard} isPrivate /> */}
    <Route exact path="/entry" component={Entry} isPrivate={false} />
  </Switch>
);
