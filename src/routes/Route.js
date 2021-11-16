import { Route as ReactRoute, Redirect } from "react-router";
import { Users } from "../providers/Users";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = Users();
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
