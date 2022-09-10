import axios from "axios";

const Register = (props) => {
  const createUser = (e) => {
    e.preventDefault();

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
      });
  };

  return (
    <div>
      <h2>Inscription</h2>

      <form onSubmit={createUser}>
        <label>
          Prénom
          <input type="text" id="firstname" />
        </label>

        <label>
          Nom
          <input type="text" id="name" />
        </label>

        <label>
          N° de téléphone
          <input type="phone" id="phone" />
        </label>

        <input type="submit" id="submit_button" />
      </form>
    </div>
  );
};

export default Register;
