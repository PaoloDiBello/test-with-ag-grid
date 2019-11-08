import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import useForm from "react-hook-form";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { handleSubmit, register, reset } = useForm({});

  const handleOnClick = values => {
    console.log("values", values);
    dispatch({ type: "CHANGE_NAME", payload: values.name });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnClick)}>
        <input type="text" ref={register} name="name" />
        <button type="submit">Submit</button>
      </form>
      <p>{state.name}</p>

      <button
        onClick={() =>
          dispatch({
            type: "DO_SOMETHING_BAD",
            payload: [
              "hATE YOU YAY!",
              "BOB THE BUILDER, IS THAT YOU?",
              "WHAT ARE YOU ACTUALLY DOING",
              "MY NAME IS PEPPA PIG, AND THIS IS MY LITTLE BROTHER JORGE",
              "お前はもう死んでいる"
            ]
          })
        }
      >
        DIE
      </button>

      <p>{state.bad}</p>
    </>
  );
};

export default Counter;
