import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderConfirm.module.scss";
import { useContext } from "react";
import { UserOrderContext } from "../../context/UserOrderProvider";
import { useNavigate } from "react-router-dom";

const OrderConfirm = () => {
	const { customer, cleanOrderedCustomer } = useContext(UserOrderContext);

	const navigate = useNavigate();

	if (customer) {
		setTimeout(() => {
			cleanOrderedCustomer();
			navigate("/accueil");
		}, 10000);
	}

	return (
		<>
			{customer ? (
				<div className={styles.OrderConfirm}>
					<p>
						Merci pour votre commande {customer.firstName}{" "}
						{customer.lastName} elle sera livré ici :{" "}
						{customer.adresse}. D'ici quelques minutes vous recevrez
						un mail de confirmation à cette adresse mail :{" "}
						{customer.email}
					</p>
					<br />
					<strong>
						Vous serez redirigez d'ici quelques instants
					</strong>
				</div>
			) : (
				<div className={styles.OrderConfirm}>
					<p>Vous n'avez pas de commande validé</p>
				</div>
			)}
		</>
	);
};

export default OrderConfirm;
