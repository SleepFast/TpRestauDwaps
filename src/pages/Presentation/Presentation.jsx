import { useContext } from "react";
import styles from "./Presentation.module.scss";
import { MealListContext } from "./../../context/MealListProvider";

const Presentation = () => {
	const { meals } = useContext(MealListContext);

	return (
		<div className={styles.Presentation}>
			<h2>À Propos de Nous</h2>
			<p>
				Bienvenue chez dwapsFood, l'endroit où la passion culinaire
				rencontre l'innovation. Notre équipe dévouée travaille sans
				relâche pour vous offrir une expérience gastronomique
				exceptionnelle.
			</p>

			<h2>Notre Menu</h2>
			<div className="menu-item">
				<h3>Plat Signature</h3>
				<p>
					Découvrez notre plat signature, préparé avec des ingrédients
					frais et locaux. Une explosion de saveurs qui éveillera vos
					papilles.
				</p>
				{meals && meals.length > 0 && (
					<div className={styles.PresentationMeal}>
						<div>
							<h3>{meals[10].name}</h3>
							<strong>
								Ce plat proviens de {meals[10].cuisine}
							</strong>
							<p>Avec en ingredients : {meals[10].ingredients}</p>
						</div>
						<img src={meals[10].image} alt="" />
					</div>
				)}
			</div>

			<div className="menu-item">
				<h3>Menu Varié</h3>
				<p>
					Notre menu propose une variété de plats délicieux, des
					entrées appétissantes aux desserts exquis. Il y en a pour
					tous les goûts.
				</p>
			</div>

			<div className="menu-item">
				<h3>Options Végétariennes</h3>
				<p>
					Pour nos amis végétariens, nous offrons une sélection de
					plats délicieux et équilibrés. Chez dwapsFood, chacun trouve
					son bonheur.
				</p>
			</div>
		</div>
	);
};

export default Presentation;
