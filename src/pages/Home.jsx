import React from "react";
import UsersResults from "../components/users/UsersResults";
import UsersSearch from "../components/users/UsersSearch";

function Home() {
  return (
    <>
      <UsersSearch />
      <UsersResults />
    </>
  );
}

export default Home;
