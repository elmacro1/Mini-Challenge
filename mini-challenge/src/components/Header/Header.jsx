import { useNavigate } from "react-router-dom";
import styles from "./Headers.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main__container}>
      <ul className={styles.list__container}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/form")}>Form</li>
      </ul>
    </div>
  );
};

export default Header;
