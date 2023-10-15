import { useNavigate } from "react-router-dom";

function SecurePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <div className="wrapper">
      <h3>This is a Secure Page!</h3>

      <div className="secure">
        <p>Hi ....</p>

        <p>
          You are viewing this page because you have successfully signed up.
        </p>
        <p>
          And I just wanna say let you are bold, strong and you gats this
          &#128170;
        </p>
        <button onClick={handleSubmit}>Go back</button>
      </div>
    </div>
  );
}

export default SecurePage;
