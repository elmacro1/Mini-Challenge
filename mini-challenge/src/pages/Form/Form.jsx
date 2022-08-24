import { useState } from "react";
import { employeesData } from "../../data";
import styles from "./Form.module.css";

const Form = () => {
  const [input, setInput] = useState({
    nombre: "",
    edad: "",
    carrera: "",
    hobbie: "",
  });

  const handleChange = (evt) => {
    setInput({ ...input, [evt.target.name]: evt.target.value });
    console.log(input);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(input);
    employeesData.push(input);
    setInput({
      nombre: "",
      edad: "",
      carrera: "",
      hobbie: "",
    });
  };
  return (
    <div className={styles.main__container}>
      <form className={styles.form__container} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input.nombre}
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Career"
          value={input.carrera}
          onChange={handleChange}
          name="carrera"
        />
        <input
          type="number"
          placeholder="Age"
          value={input.edad}
          onChange={handleChange}
          name="edad"
        />
        <input
          type="text"
          placeholder="Hobbie"
          value={input.hobbie}
          onChange={handleChange}
          name="hobbie"
        />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default Form;
