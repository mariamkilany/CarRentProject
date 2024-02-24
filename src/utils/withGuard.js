import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withGuard = (Component) => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.user.user);
    console.log("isAuthenticated: ", isAuthenticated);
    const navigate = useNavigate();

    if (isAuthenticated) {
      navigate("/home");
      return null;
    }
    return <Component {...props} />;
  };
};

export default withGuard;
