import styles from "./Footer.module.scss";
import { UserContext } from "./../../context/UserProvider";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const { toggleModals, currentUser } = useContext(UserContext);
	
  const navigate = useNavigate();

	return (
		<footer className={styles.Footer}>
			{!currentUser && (
				<>
					<button onClick={() => toggleModals("signIn")} className="">
						Sign In
					</button>
				</>
			)}
			{currentUser && (
				<button
					onClick={() => {
						toggleModals("signOut");
						navigate("/accueil") ;
					}}
				>
					Sign Out
				</button>
			)}
		</footer>
	);
};

export default Footer;
