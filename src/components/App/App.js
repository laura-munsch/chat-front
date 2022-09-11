import React from "react";
import Conversation from "../Conversation/Conversation";
import Register from "../Register/Register";
import UsersList from "../UsersList/UsersList";
import "./app.scss";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState();
  const [contact, setContact] = React.useState();

  return (
    <section className="chat">
      <header className="chat__header">
        <h1>Chat</h1>
        <Register setCurrentUser={setCurrentUser} setContact={setContact} />
      </header>

      <UsersList
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        contact={contact}
        setContact={setContact}
      />

      <Conversation currentUser={currentUser} contact={contact} />
    </section>
  );
};

export default App;
