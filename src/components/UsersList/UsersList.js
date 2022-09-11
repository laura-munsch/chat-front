import React from "react";
import axios from "axios";
import User from "../User/User";
import "./usersList.scss";

const UsersList = (props) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/users/").then((response) => {
      setUsers(response.data);

      if (!props.currentUser) {
        props.setCurrentUser(response.data[0]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentUser]);

  return (
    <aside className="chat__sidebar users-list">
      <h2 className="users-list__current-user-title">Connecté·e comme :</h2>

      {props.currentUser && (
        <User user={props.currentUser} isCurrentUser={true} />
      )}

      <h2 className="users-list__contacts-title">Contacts</h2>

      <ul className="users-list__list">
        {users
          .filter((user) => user.id !== props.currentUser.id)
          .map((user) => (
            <li
              key={user.id}
              className="users-list__item"
              onClick={() => props.setContact(user)}
            >
              <User user={user} isContact={props.contact === user} />
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default UsersList;
