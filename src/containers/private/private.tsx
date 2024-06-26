import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type PrivateProps = {
  children: JSX.Element;
  isAuthenticated: boolean;
};
function Private({ children, isAuthenticated }: PrivateProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/signin", { state: { from: location.pathname } });
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return children;
  }
  return null;
}

export { Private };
