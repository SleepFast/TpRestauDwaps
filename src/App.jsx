import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import Accueil from "./pages/Accueil/Accueil";
import Presentation from "./pages/Presentation/Presentation";
import Carte from "./pages/Carte/Carte";
import Localisation from "./pages/Localisation/Localisation";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import SignInModal from "./components/SignInModal/SignInModal";
import Footer from "./components/Footer/Footer";
import PrivateModify from "./pages/Private/PrivateModify/PrivateModify";
import { Navigate } from 'react-router-dom'
import PrivateAdd from "./pages/Private/PrivateAdd/PrivateAdd";
import MealBubbleOrder from './components/MealBubbleOrder/MealBubbleOrder'
import Commande from './pages/Commande/Commande'
import OrderConfirm from './pages/OrderConfirm/OrderConfirm'
import SiteMap from './pages/SiteMap/SiteMap'

function App() {

	return (
		<div className="app">
			<Router>
				<HeaderNavigation></HeaderNavigation>
				<div className="container">
					<SignInModal></SignInModal>
					<Routes>
						<Route path="/accueil" element={<Accueil />} />
						<Route
							path="/presentation"
							element={<Presentation />}
						/>
						<Route path="/carte" element={<Carte />} />
						<Route
							path="/localisation"
							element={<Localisation />}
						/>
						<Route
							path="/commande"
							element={<Commande />}
						/>
						<Route
							path="/confirmation"
							element={<OrderConfirm />}
						/>
						<Route
							path="/siteMap"
							element={<SiteMap />}
						/>
						<Route path="/private" element={<Private />}>
							<Route
								path="/private/liste-des-plats"
								element={<PrivateHome />}
							/>	
              <Route
								path="/private/modifier/:id"
								element={<PrivateModify />}
							/>
              <Route
								path="/private/ajouter-un-plat"
								element={<PrivateAdd />}
							/>
						</Route>
						<Route path="/" element={<Navigate to="/accueil"/>} />
						<Route path="*" element={<div>PAGE NOT FOUND</div>} />
					</Routes>
					<MealBubbleOrder></MealBubbleOrder>
				</div>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
