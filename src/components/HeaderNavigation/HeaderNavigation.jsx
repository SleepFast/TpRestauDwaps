import styles from "./HeaderNavigation.module.scss";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../context/UserProvider";
import "./HeaderNavigation.scss";

const HeaderNavigation = () => {
	const { currentUser } = useContext(UserContext);
	const location = useLocation();

	return (
		<header className={styles.HeaderNavigation}>
			<div>
				<Link to="/accueil">
					<img src="../../../public/logo.png" />
				</Link>
			</div>
			<nav className={styles.HeaderNavigation_links}>
				<NavLink to="/presentation">Presentation</NavLink>
				<NavLink to="/carte">Carte</NavLink>
				<NavLink to="/localisation">Localisation</NavLink>
				{currentUser && (
					<>
						<NavLink to="/private/liste-des-plats">
							Listes des plats
						</NavLink>
						<NavLink to="/private/ajouter-un-plat">Ajouter un plat</NavLink>
					</>
				)}
			</nav>
		</header>
	);
};

export default HeaderNavigation;
