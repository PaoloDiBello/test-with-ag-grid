import React, { useEffect } from "react";
import useForm from "react-hook-form";
import "./Form.scss";

const Form = () => {
  const {
    handleSubmit,
    register,
    unregister,
    errors,
    reset,
    ...rest
  } = useForm();

  console.log("rest", rest);

  console.log("rest.getValues()", rest.getValues());

  useEffect(() => {
    return () => {
      unregister();
    };
  }, [unregister, errors]);

  const onSubmit = values => {
    console.log("values", values);
    console.log("errors", errors);
    alert("data sent");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      Form
      <input
        name="email"
        className={`input ${errors.email && "border-error"}`}
        ref={register({
          minLength: {
            value: "10",
            message: "Lenght should be higher than 10"
          },
          pattern: {
            message: "invalid email address",
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          }
        })}
      />
      <div className="error">{errors.email && errors.email.message}</div>
      <input
        name="username"
        className={`input ${errors.username && "border-error"}`}
        ref={register({
          validate: value => value.length > 5 || "Length must be higher than 5"
        })}
      />
      <div className="error">{errors.username && errors.username.message}</div>
      <button type="submit" className="btn blue">
        Submit
      </button>
    </form>
  );
};

export default Form;
