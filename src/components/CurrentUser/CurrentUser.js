const CurrentUser = (props) => {
  if (!props.currentUser) return;

  return (
    <div>
      <h2>Connecté·e comme :</h2>
      <p>
        {props.currentUser.firstname}&nbsp;
        {props.currentUser.name}
      </p>
    </div>
  );
};

export default CurrentUser;
