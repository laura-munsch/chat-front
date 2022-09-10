import React from "react";
import axios from "axios";
import CurrentUser from "./CurrentUser";

const UserList = (props) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/users/").then((response) => {
      setUsers(response.data);
    });
  }, [props.currentUser]);

  return (
    <aside>
      <CurrentUser currentUser={props.currentUser} />

      <h2>Users :</h2>

      <ul>
        {users.map((user, key) => (
          <li key={key}>
            {user.firstname}&nbsp;
            {user.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UserList;
