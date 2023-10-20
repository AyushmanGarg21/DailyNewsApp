import SigninForm from "../Forms/Signin";

const LoggedOutButton = (props) => {
  return (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Log In
        </button>
        <SigninForm togglelog = {props.togglelog} onLoginSuccess = {props.onLoginSuccess}/>
      </div>
  );
};

export default LoggedOutButton;
