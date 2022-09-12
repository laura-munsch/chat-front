import axios from "axios";
import React from "react";
import "./register.scss";

const Register = (props) => {
  const [errors, setErrors] = React.useState([]);

  const createUser = (e) => {
    e.preventDefault();
    setErrors([]);

    let firstname = document.getElementById("firstname").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    axios
      .post(process.env.REACT_APP_API_URL + "/users", {
        name: name,
        firstname: firstname,
        phone: phone,
        created_at: Date.now(),
      })
      .then((response) => {
        props.setCurrentUser(response.data);
        props.setContact();
        e.target.reset();
      })
      .catch((error) => {
        let phoneError = error.response.data.errors.phone;
        if (phoneError) {
          setErrors(phoneError);
        }
      });
  };

  return (
    <div className="register">
      {errors.map((error, key) => (
        <p key={key} className="register__error">
          {error}
        </p>
      ))}

      <h2 className="register__title">Inscription</h2>

      <form onSubmit={createUser} className="register__form">
        <label className="register__label">
          Prénom
          <input
            type="text"
            id="firstname"
            required
            className="register__field"
          />
        </label>

        <label className="register__label">
          Nom
          <input type="text" id="name" required className="register__field" />
        </label>

        <label className="register__label">
          Téléphone
          <input
            type="tel"
            id="phone"
            required
            className={`register__field ${
              errors.length > 0 && "register__field--error"
            }`}
          />
        </label>

        <input
          type="submit"
          id="submit_button"
          className="register__button"
          value="S'inscrire"
        />
      </form>
    </div>
  );
};

export default Register;
