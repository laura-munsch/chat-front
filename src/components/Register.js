import axios from "axios";
import React from "react";

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
      })
      .catch((error) => {
        let phoneError = error.response.data.errors.phone;
        if (phoneError) {
          setErrors(phoneError);
        }
      });
  };

  return (
    <div>
      <h2>Inscription</h2>

      {errors.map((error, key) => (
        <p key={key}>{error}</p>
      ))}

      <form onSubmit={createUser}>
        <label>
          Prénom
          <input type="text" id="firstname" required />
        </label>

        <label>
          Nom
          <input type="text" id="name" required />
        </label>

        <label>
          N° de téléphone
          <input type="tel" id="phone" required />
        </label>

        <input type="submit" id="submit_button" />
      </form>
    </div>
  );
};

export default Register;
