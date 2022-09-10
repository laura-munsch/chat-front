import axios from "axios";
import React from "react";
import "./conversation.scss";

const Conversation = (props) => {
  const [conversation, setConversation] = React.useState([]);

  const isSentByCurrentUser = (senderId) => {
    if (senderId === props.currentUser.id) {
      return "conversation__message--sent";
    }

    return "conversation__message--recieved";
  };

  React.useEffect(() => {
    let user1 = props.currentUser?.id;
    let user2 = props.contact?.id;

    if (user1 && user2) {
      axios
        .get(
          process.env.REACT_APP_API_URL + `/messages/by-users/${user1}/${user2}`
        )
        .then((response) => {
          setConversation(response.data);
        });
    }
  }, [props.currentUser, props.contact]);

  if (!props.contact) {
    return (
      <main className="conversation">
        <p>Veuillez sélectionner un contact dans la liste.</p>
      </main>
    );
  }

  return (
    <main className="conversation">
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

      {conversation.length === 0 && (
        <p>Vous n'avez pas encore échangé de messages avec cette personne.</p>
      )}
    </main>
  );
};

export default Conversation;
