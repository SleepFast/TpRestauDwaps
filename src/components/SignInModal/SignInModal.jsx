import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

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
		let cred
		try {
			cred = await signIn(
				inputs.current[0].value,
				inputs.current[1].value
			);
			setValidation("");
			toggleModals("close");
			inputs.current = []
			navigate("/private/liste-des-plats");
		} catch {
			inputs.current = []
			setValidation("Wopsy, email and/or password incorrect");
		}
	};

	const closeModal = () => {
		setValidation("");
		toggleModals("close");
	};

	return (
		<>
			{modalState.signInModal && (
				<div className="position-fixed top-0 vw-100 vh-100">
					<div
						onClick={closeModal}
						className=""
					></div>
					<div
						className=""
					>
						<div className="">
							<div className="">
								<div className="">
									<h5 className="">Sign In</h5>
									<button
										onClick={closeModal}
										className=""
									></button>
								</div>

								<div className="">
									<form
										onSubmit={handleForm}
										className="sign-up-form"
									>
										<div className="mb-3">
											<label
												htmlFor="signInEmail"
												className="form-label"
											>
												Email adress
											</label>
											<input
												ref={addInputs}
												name="email"
												required
												type="email"
												className="form-control"
												id="signInEmail"
											/>
										</div>

										<div className="mb-3">
											<label
												htmlFor="signInPwd"
												className="form-label"
											>
												Password
											</label>
											<input
												ref={addInputs}
												name="pwd"
												required
												type="password"
												className="form-control"
												id="signInPwd"
											/>
											<p className="text-danger mt-1">
												{validation}
											</p>
										</div>

										<button className="btn btn-primary">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
