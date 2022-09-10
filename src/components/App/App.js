import React from "react";
import Conversation from "../Conversation/Conversation";
import Register from "../Register/Register";
import UsersList from "../UserList/UserList";
import "./app.scss";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState();
  const [contact, setContact] = React.useState();

  return (
    <section className="chat">
      <header className="chat__header">
        <h1>Chat</h1>
        <Register setCurrentUser={setCurrentUser} />
      </header>

      <UsersList
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setContact={setContact}
      />

      <main>
        <Conversation currentUser={currentUser} contact={contact} />
      </main>
    </section>
  );
};

export default App;
