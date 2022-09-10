import React from "react";
import Conversation from "./Conversation";
import Register from "./Register";
import UsersList from "./UsersList";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState();
  const [contact, setContact] = React.useState();

  return (
    <section>
      <header>
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
