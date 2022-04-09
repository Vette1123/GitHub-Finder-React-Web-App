import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/githubContext/GithubContext";

function UsersResults() {
  const { loading, users } = useContext(GithubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 m-12 ">
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
export default UsersResults;
