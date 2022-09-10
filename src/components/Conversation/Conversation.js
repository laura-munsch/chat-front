import axios from "axios";
import React from "react";

const Conversation = (props) => {
  const [conversation, setConversation] = React.useState([]);

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
    return <p>Veuillez sélectionner un contact dans la liste.</p>;
  }

  return (
    <div>
      {conversation.map((message) => (
        <p key={message.id}>{message.content}</p>
      ))}

      {conversation.length === 0 && (
        <p>Vous n'avez pas encore échangé de messages avec cette personne.</p>
      )}
    </div>
  );
};

export default Conversation;
