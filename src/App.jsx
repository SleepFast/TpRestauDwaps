import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import Accueil from './pages/Accueil/Accueil'
import Presentation from './pages/Presentation/Presentation'
import Carte from './pages/Carte/Carte'
import Localisation from './pages/Localisation/Localisation'
import MealListProvider from './context/index';

function App() {
  return (
    <div className="app">
      <Router>
        <MealListProvider>
          <HeaderNavigation></HeaderNavigation>
          <Routes>
            <Route path="/accueil" element={<Accueil/>} />
            <Route path="/presentation" element={<Presentation/>} />
            <Route path="/carte" element={<Carte/>} />
            <Route path="/localisation" element={<Localisation/>} />
            <Route path="*" element={<Accueil to="/accueil" />} />
          </Routes>
        </MealListProvider>
      </Router>
    </div>
  )
}

export default App
