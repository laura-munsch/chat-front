import React from "react";
import Register from "./Register";
import UserList from "./UsersList";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <section>
      <header>
        <h1>Chat</h1>
        <Register setCurrentUser={setCurrentUser} />
      </header>

      <UserList currentUser={currentUser} />
    </section>
  );
};

export default App;
