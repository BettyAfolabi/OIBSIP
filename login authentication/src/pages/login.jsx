import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

function Login() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;
  const [verifyLogin, setVerifyLogin] = useState("");

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  const onSubmit = (data) => {
    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

    if (Array.isArray(storedUserData)) {
      const userExists = storedUserData.some(
        (user) =>
          user.username === data.username && user.password === data.password
      );

      if (userExists) {
        navigate("/securePage");
      } else {
        setVerifyLogin("Invalid username or password.");
      }
    } else {
      setVerifyLogin("Invalid username or password.");
    }
  };
  return (
    <div className="wrapper">
      <h2>Login Authentication</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {verifyLogin && <p className="error">{verifyLogin}</p>}

        <div className="formInput">
          <InputField
            label="Username"
            id="username"
            name="username"
            placeholder="enter your username"
            register={register}
            error={errors.username}
          />
        </div>
        <div className="formInput">
          <InputField
            label="Password"
            id="password"
            name="password"
            placeholder="enter your password"
            register={register}
            error={errors.password}
          />
        </div>
        <button disabled={isSubmitting}>Login</button>
      </form>
    </div>
  );
}

export default Login;
