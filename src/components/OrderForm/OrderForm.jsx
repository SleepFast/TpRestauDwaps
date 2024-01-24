import React from "react";
import styles from "./OrderForm.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserOrderContext } from "./../../context/UserOrderProvider";

const OrderForm = () => {
	const { addCustomer } = useContext(UserOrderContext);

	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => {
		addCustomer(data);
		navigate("/confirmation");
	};

	return (
		<>
			<div className={styles.OrderForm}>
				<h3>
					Pour valider votre panier, veuillez renseigner les
					informations ci-dessous
				</h3>
				<div className={styles.OrderFormCard}>
					<img src="../../../public/delivery.png" />
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="firstName">Prénom</label>
							<input
								{...register("firstName", {
									required: true,
									pattern: /^[A-Za-z]+$/i,
								})}
							/>
							{errors?.firstName?.type === "required" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Veuillez renseigner votre prénom
								</p>
							)}
							{errors?.firstName?.type === "pattern" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Les caractères spécieux ne sont pas
									autorisés
								</p>
							)}
						</div>

						<div>
							<label htmlFor="lastName">Nom de famille</label>
							<input
								{...register("lastName", {
									required: true,
									pattern: /^[A-Za-z]+$/i,
								})}
							/>
							{errors?.lastName?.type === "required" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Veuillez renseigner votre nom de famille
								</p>
							)}
							{errors?.lastName?.type === "pattern" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Les caractères spécieux ne sont pas
									autorisés
								</p>
							)}
						</div>

						<div>
							<label htmlFor="email">Adresse mail</label>
							<input
								type="email"
								{...register("email", { required: true })}
							/>
							{errors?.email?.type === "required" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Veuillez renseigner votre adresse mail
								</p>
							)}
						</div>

						<div>
							<label htmlFor="adresse">
								Adresse de livraison
							</label>
							<input
								{...register("adresse", { required: true })}
							/>
							{errors?.adresse?.type === "required" && (
								<p
									role="alert"
									className={styles.OrderFormError}
								>
									Veuillez renseigner votre adresse
								</p>
							)}
						</div>

						<button type="submit" className={styles.SubmitButton}>
							Valider ma commande
							<div className={styles.icon}>
								<svg
									height="24"
									width="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path
										d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default OrderForm;
