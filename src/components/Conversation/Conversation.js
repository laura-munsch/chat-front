import axios from "axios";
import React from "react";
import "./conversation.scss";

const Conversation = (props) => {
  const [conversation, setConversation] = React.useState([]);
  const [error, setError] = React.useState();

  const isSentByCurrentUser = (senderId) => {
    if (senderId === props.currentUser.id) {
      return "conversation__message--sent";
    }

    return "conversation__message--recieved";
  };

  React.useEffect(() => {
    let user1 = props.currentUser?.id;
    let user2 = props.contact?.id;

    setConversation([]);

    if (user1 && user2) {
      axios
        .get(
          process.env.REACT_APP_API_URL + `/messages/by-users/${user1}/${user2}`
        )
        .then((response) => {
          setError();
          setConversation(response.data);

          if (response.data.length === 0) {
            setError(
              "Vous n'avez pas encore échangé de messages avec cette personne."
            );
          }
        });
    } else {
      setError("Veuillez sélectionner un contact dans la liste.");
    }
  }, [props.currentUser, props.contact]);

  return (
    <main className="conversation">
      <p className="conversation__error">{error}</p>

      {conversation.map((message) => (
        <p
          key={message.id}
          className={`conversation__message ${isSentByCurrentUser(
            message.sender_id
          )} `}
        >
          {message.content}
        </p>
      ))}
    </main>
  );
};

export default Conversation;
