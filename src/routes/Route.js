import { Route as ReactRoute, Redirect } from "react-router";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === false ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
