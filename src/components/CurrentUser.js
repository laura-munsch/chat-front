const CurrentUser = (props) => {
  if (!props.currentUser) return;

  return (
    <p>
      {props.currentUser.firstname}&nbsp;
      {props.currentUser.name}
    </p>
  );
};

export default CurrentUser;
