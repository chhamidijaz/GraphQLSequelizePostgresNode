import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UPDATE_USER_MUTATION } from "../GraphQL/Mutations";
import { LOAD_USER } from "../GraphQL/Queries";

const UpdateUser = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const { id } = useParams();
  const { loading, data } = useQuery(LOAD_USER, {
    nextFetchPolicy: "network-only",
    variables: {
      id: id,
    },
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      history.push("/");
      window.location.reload();
    },
  });

  const Update = () => {
    updateUser({
      variables: {
        id,
        name,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>User Detail</h1>
      <input
        type="text"
        placeholder={!loading && data.user.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className="form-submit-button" onClick={Update}>
        Create User
      </button>
    </div>
  );
};

export default UpdateUser;
