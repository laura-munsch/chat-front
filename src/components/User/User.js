import "./user.scss";

const User = (props) => {
  const formatPhoneNumber = (phoneNumber) => {
    const phoneNumberAsArray = Array.from(String(phoneNumber));
    phoneNumberAsArray.unshift("0");

    let formattedPhoneNumber = "";
    for (let i = 0; i < phoneNumberAsArray.length; i += 2) {
      formattedPhoneNumber +=
        phoneNumberAsArray[i] + phoneNumberAsArray[i + 1] + " ";
    }

    return formattedPhoneNumber;
  };

  const userClassNames = () => {
    return props.isCurrentUser
      ? "user--current"
      : props.isContact
      ? "user--contact"
      : "";
  };

  return (
    <div className={`user ${userClassNames()}`}>
      <h3 className="user__name">
        {props.user.firstname} {props.user.name}
      </h3>
      <p className="user__phone">{formatPhoneNumber(props.user.phone)}</p>
    </div>
  );
};

export default User;
