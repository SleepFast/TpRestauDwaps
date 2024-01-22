import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function Private() {
	const { currentUser } = useContext(UserContext);

	if (!currentUser) {
		return <Navigate to="/accueil"/>;
	}
	return (
		<div className="container">
			<Outlet />
		</div>
	);
}
