import React, { useState } from "react";
import SearchFilterRepoBox from "./SearchFilterRepoBox/SearchFilterRepoBox";
import ResourceNavigationBox from "./ResourceNavigationBox/ResourceNavigationBox";
import DisplayReposBox from "./DisplayReposBox/DisplayReposBox";
import { GlobalContext } from "../../../context/githubContext";

const UserDisplayRepoBox = () => {
  const { repos } = GlobalContext();
  const [filteredRepos, setFilteredRepos] = useState(repos);

  return (
    <div className="col-span-3 px-2 my-7 overflow-hidden">
      <ResourceNavigationBox />
      <SearchFilterRepoBox setFilteredRepos={setFilteredRepos} />
      <DisplayReposBox filteredRepos={filteredRepos} />
    </div>
  );
};

export default UserDisplayRepoBox;
