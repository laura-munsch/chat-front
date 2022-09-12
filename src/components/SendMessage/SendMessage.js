import axios from "axios";
import "./sendMessage.scss";

const SendMessage = (props) => {
  const sendMessage = (e) => {
    e.preventDefault();

    let content = document.getElementById("content").value;

    axios
      .post(process.env.REACT_APP_API_URL + "/messages", {
        content: content,
        sender_id: props.senderId,
        recipient_id: props.recipientId,
        created_at: Date.now(),
      })
      .then((response) => {
        props.setConversation([...props.conversation, response.data]);
        props.setError([]);
        e.target.reset();
      });
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <input type="text" id="content" className="send-message__input" />
      <input type="submit" value="Envoyer" className="send-message__button" />
    </form>
  );
};

export default SendMessage;
