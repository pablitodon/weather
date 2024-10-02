import { useState } from "react";
import styles from "./styles.module.css";
import { useSearchCityQuery } from "../../services/apiWeather";
import { fixTemperature } from "../../helpers/FixTemperature";
import { useDebounce } from "../../hooks/useDebounce";

const Main = () => {
    const [city, setCity] = useState<string>("");
    const debouncedCity = useDebounce(city, 1500)
    const { data: cityData, error, isLoading } = useSearchCityQuery(debouncedCity || '', { skip: !debouncedCity })

    return (
        <div className={styles.container}>
            <h1>Погода в городах мира</h1>
            <input
                type="text"
                placeholder='Введите город'
                value={city || ''}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className={styles.weather__info}>
                {isLoading && <p className={styles.loading}>Загрузка данных...</p>}
                {error && <p className={styles.error}>Error...</p>}
                {cityData &&
                    <div className={styles.weatherData}>
                        <h2>Город:{cityData.name}</h2>
                        <p>t: {fixTemperature(cityData.main.temp)}°C</p>
                        <p>Скорость ветра:{`${cityData.wind.speed.toFixed(1)}`} м/с</p>
                        <p>Состояние: {cityData.weather[0].description}</p>
                    </div>
                }
            </div>
        </div >
    );
};

export default Main;