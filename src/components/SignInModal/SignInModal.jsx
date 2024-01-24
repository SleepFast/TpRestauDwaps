import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";
import styles from "./SignInModal.module.scss";
import { Portal } from "react-portal";

export default function SignInModal() {
	const { modalState, toggleModals, signIn } = useContext(UserContext);

	const navigate = useNavigate();

	const [validation, setValidation] = useState("");

	const inputs = useRef([]);

	const addInputs = (el) => {
		if (el && !inputs.current.includes(el)) {
			inputs.current.push(el);
		}
	};

	const handleForm = async (e) => {
		e.preventDefault();
		let cred;
		try {
			cred = await signIn(
				inputs.current[0].value,
				inputs.current[1].value
			);
			setValidation("");
			toggleModals("close");
			inputs.current = [];
			navigate("/private/liste-des-plats");
		} catch {
			// inputs.current = [];
			setValidation("Wopsy, email and/or password incorrect");
		}
	};

	const closeModal = () => {
		setValidation("");
		toggleModals("close");
	};

	return (
		<Portal>
			{modalState.signInModal && (
				<>
					<div className={styles.SignInModal}>
						<button onClick={closeModal} className={styles.SignInModalClose}>
							<ion-icon name="close"></ion-icon>
						</button>
						<div>
							<strong>Sign In</strong>
							<button onClick={closeModal} className=""></button>
						</div>

						<div>
							<form onSubmit={handleForm}>
								<div>
									<label htmlFor="signInEmail">
										Email adress
									</label>
									<input
										ref={addInputs}
										name="email"
										required
										type="email"
										id="signInEmail"
									/>
								</div>

								<div>
									<label htmlFor="signInPwd">Password</label>
									<input
										ref={addInputs}
										name="pwd"
										required
										type="password"
										id="signInPwd"
									/>
									<p>{validation}</p>
								</div>

								<button>Submit</button>
							</form>
						</div>
					</div>
					<div
						onClick={closeModal}
						className={styles.SignInModalLayout}
					></div>
				</>
			)}
		</Portal>
	);
}
