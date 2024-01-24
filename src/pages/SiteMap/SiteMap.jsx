import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteMap.module.scss";
import { Link } from "react-router-dom";

const SiteMap = () => (
	<div className={styles.SiteMap}>
		<h1>PLAN DU SITE</h1>
		<ul>
			<li>
				<Link to="/accueil">
					<strong>-accueil</strong>
				</Link>
			</li>
			<li>
				<Link to="/presentation">
					<strong>-presentation</strong>
				</Link>
			</li>
			<li>
				<Link to="/carte">
					<strong>-carte</strong>
				</Link>
				<ul>
					<li>
						<Link to="/commande">.commande</Link>
					</li>
					<li>
						<Link to="/confirmation">.confirmation</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link to="/localisation">
					<strong>-localisation</strong>
				</Link>
			</li>
			<li>
				<Link to="/private/liste-des-plats">
					<strong>-liste-des-plats</strong>
				</Link>
				<ul>
					<li>.modifier un plat</li>
				</ul>
			</li>
			<li>
				<Link to="/private/ajouter-un-plat">
					<strong>-ajouter-un-plat</strong>
				</Link>
			</li>
		</ul>
	</div>
);

export default SiteMap;
