import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "./Form.css";
import { useHistory } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      history.push("/");
      window.location.reload();
    },
  });

  const addUser = () => {
    createUser({
      variables: {
        name: name,
        email: email,
        role: role,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create User</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <button className="form-submit-button" onClick={addUser}>
        Create User
      </button>
    </div>
  );
}

export default Form;
