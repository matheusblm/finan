import { Route as ReactRoute, Redirect } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { accessToken } = useAuth();
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
