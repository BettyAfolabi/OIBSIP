import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  const navigate = useNavigate();
  const [registeredError, setRegisteredError] = useState("");

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
        setRegisteredError("account already exists.");
      } else {
        storedUserData.push(data);
        localStorage.setItem("userData", JSON.stringify(storedUserData));

        navigate("/login");
      }
    } else {
      localStorage.setItem("userData", JSON.stringify([data]));

      navigate("/login");
    }
  };

  return (
    <div className="wrapper">
      <h2>Login Authentication</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        {registeredError && <p className="error">{registeredError}</p>}

        <div className="formInput">
          <InputField
            label="Username"
            id="username"
            name="username"
            placeholder="enter a username"
            register={register}
            error={errors.username}
          />
        </div>
        <div className="formInput">
          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="enter password"
            register={register}
            error={errors.password}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
          />
        </div>
        <button disabled={isSubmitting}>Sign Up</button>
        <p>
          already have an account?{" "}
          <Link to={"/login"} className="link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
