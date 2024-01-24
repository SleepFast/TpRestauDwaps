import styles from "./Footer.module.scss";
import { UserContext } from "./../../context/UserProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
	const { toggleModals, currentUser } = useContext(UserContext);

	const navigate = useNavigate();

	return (
		<footer className={styles.Footer}>
			<ul className={styles.FooterLeft}>
				<li>
					<Link to="/accueil">accueil</Link>
				</li>
				<li>
					<Link to="/presentation">presentation</Link>
				</li>
				<li>
					<Link to="/carte">carte</Link>
				</li>
				<li>
					<Link to="/localisation">localisation</Link>
				</li>
				{currentUser && (
					<>
						<li>
							<Link to="/private/liste-des-plats">
								liste-des-plats
							</Link>
						</li>
						<li>
							<Link to="/private/ajouter-un-plat">
								ajouter-un-plat
							</Link>
						</li>
					</>
				)}
			</ul>
			<div className={styles.FooterRight}>
				{!currentUser && (
					<>
						<button
							onClick={() => toggleModals("signIn")}
							className=""
						>
							Connexion administrateur
						</button>
					</>
				)}
				{currentUser && (
					<button
						onClick={() => {
							toggleModals("signOut");
							navigate("/accueil");
						}}
					>
						Se déconnecter
					</button>
				)}
				<Link to="/siteMap">siteMap</Link>
			</div>
		</footer>
	);
};

export default Footer;
