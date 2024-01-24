import React from "react";
import PropTypes from "prop-types";
import styles from "./MealBubbleOrder.module.scss";
import { UserOrderContext } from "../../context/UserOrderProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const MealBubbleOrder = () => {
	const { order } = useContext(UserOrderContext);


	useEffect(() => {
	}, [order, open]);

	return (
		<Link to="/commande"
			className={
				styles.MealBubbleOrder +
				(order.length > 0 ? " " + styles.MealBubbleOrderOpen : "")
			}
		>
			<span>{order.length}</span>
			<ion-icon name="cart"></ion-icon>
		</Link>
	);
};

export default MealBubbleOrder;
