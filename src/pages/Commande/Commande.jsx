import React from "react";
import styles from "./Commande.module.scss";
import { UserOrderContext } from "../../context/UserOrderProvider";
import { useContext } from "react";
import MealCell from "../../components/MealCell/MealCell";
import { Link } from "react-router-dom";
import OrderForm from './../../components/OrderForm/OrderForm'

const Commande = () => {
	const { order, removeFromOrder } = useContext(UserOrderContext);

	return (
		<>
			{order.length > 0 ? (
				<>
					<h2>VOTRE PANIER</h2>
					<table className={styles.Commande}>
						<thead>
							<tr>
								<th width="50%">Nom du plat</th>
								<th>Pays d'origine de la spécialité</th>
								<th>Catégorie</th>
								<th>Enlever du panier</th>
							</tr>
						</thead>
						<tbody>
							{order &&
								order.map((meal, index) => {
									return (
										<MealCell
											key={index}
											meal={meal}
											isCommandePage={removeFromOrder}
										></MealCell>
									);
								})}
						</tbody>
					</table>
					<OrderForm></OrderForm>
				</>
			) : (
				<h1>
					Votre panier est vide. Pour ajouter des plats à votre panier
					allez dans la page <Link to="/carte">"carte"</Link>
				</h1>
			)}
		</>
	);
};

export default Commande;
