import React, { useState, useContext } from "react";
import GithubContext from "../../context/githubContext/GithubContext";
import AlertContext from "../../context/alerts/AlertContext";
import { searchUsers } from "../../context/githubContext/GithubActions";

function UsersSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search term", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 mx-12 xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-center mb-8 gap-8">
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40  bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-ghost  btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UsersSearch;
