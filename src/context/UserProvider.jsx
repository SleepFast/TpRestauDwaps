import { createContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
	const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

	const [currentUser, setCurrentUser] = useState();
	const [loadingData, setLoadingData] = useState(true);

	const [modalState, setModalState] = useState({
		signInModal: false,
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
			setLoadingData(false);
		});

		return unsubscribe;
	}, []);

	const toggleModals = (modal) => {
		if (modal === "signIn") {
			setModalState({
				signInModal: true,
			});
		}
		if (modal === "close") {
			setModalState({
				signInModal: false,
			});
		}
    if (modal === "signOut") {
      signOut(auth)
      setModalState({
        signInModal: false
      })
      setCurrentUser('')
    }
	};

	return (
		<UserContext.Provider
			value={{ modalState, toggleModals, currentUser, signIn }}
		>
			{!loadingData && children}
		</UserContext.Provider>
	);
}
