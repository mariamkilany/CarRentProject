import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withGuard = Component => {
	return props => {
		const { isAdmin } = useSelector(state => state.user.user);
		const navigate = useNavigate();

		useEffect(() => {
			if (!isAdmin) navigate("/login");
		}, [isAdmin, navigate]);

		return <Component {...props} />;
	};
};

export default withGuard;
