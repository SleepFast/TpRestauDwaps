import styles from "./Slider.module.scss";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./Slider.scss";
import { MealListContext } from "./../../context/MealListProvider";
import { Link } from "react-router-dom";

const Slider = () => {
	const { meals } = useContext(MealListContext);

	return (
			<div className={styles.Slider}>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					loop={true}
					pagination={false}
					modules={[EffectCoverflow, Pagination, Autoplay]}
					className="mySwiper"
				>
					{meals &&
						meals.map((meal, index) => {
							if (index < 12) {
								return (
									<SwiperSlide key={meal.id}>
										<img src={meal.image} />
									</SwiperSlide>
								);
							}
						})}
				</Swiper>
				<Link to="/carte">COMMANDER CHEZ NOUS</Link>
			</div>
	);
};

export default Slider;
