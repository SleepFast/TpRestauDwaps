import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserProvider";
import MealListProvider from "./context/MealListProvider";
import UserOrderProvider from "./context/UserOrderProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<MealListProvider>
				<UserOrderProvider>
					<App />
				</UserOrderProvider>
			</MealListProvider>
		</UserProvider>
	</React.StrictMode>
);
