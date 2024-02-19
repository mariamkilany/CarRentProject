import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withGuard = Component => {
	return props => {
		const isAuthenticated = useSelector(state => state.user.isAdmin);
		const navigate = useNavigate();

		if (!isAuthenticated) navigate("/login");
		return <Component {...props} />;
	};
};

export default withGuard;
