import { employeesData } from "../../data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.table__container}>
        <div className={styles.headers__container}>
          <span>Names</span>
          <span>Careers</span>
          <span>Age</span>
          <span>Hobbie</span>
        </div>
        <div className={styles.info__container}>
          <div className={styles.names__container}>
            {employeesData.map((elem, index) => (
              <span key={index.toString()}>{elem.nombre}</span>
            ))}
          </div>
          <div className={styles.career__container}>
            {employeesData.map((elem, index) => (
              <span key={index.toString()}>{elem.carrera}</span>
            ))}
          </div>
          <div className={styles.age__container}>
            {employeesData.map((elem, index) => (
              <span key={index.toString()}>{elem.edad}</span>
            ))}
          </div>
          <div className={styles.hobbie__container}>
            {employeesData.map((elem, index) => (
              <span key={index.toString()}>{elem.hobbie}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
