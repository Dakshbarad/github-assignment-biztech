import React, { useState, useEffect } from "react";
import { GlobalContext } from "../../../../context/githubContext";

const SearchFilterRepoBox = ({setFilteredRepos}) => {
  const { repos} = GlobalContext();
  const [filter, setFilter] = useState("all");
  const [searchRepo, setSearchRepo] = useState("");

  useEffect(() => {
    if (filter === "all") {
      setFilteredRepos(repos);
    } else {
      const newList = repos?.filter(
        (repo) => repo?.language?.toLowerCase() === filter
      );
      setFilteredRepos(newList);
    }
  }, [filter, repos, setFilteredRepos]);

  useEffect(() => {
    if (searchRepo === "") {
      setFilteredRepos(repos);
    } else {
      const newList = repos?.filter((repo) =>
        repo?.name.startsWith(searchRepo)
      );
      setFilteredRepos(newList);
    }
  }, [searchRepo, repos, setFilteredRepos]);

  return (
    <div className="flex items-stretch p-2">
      <input
        type="text"
        placeholder="Enter Repository Name"
        onChange={(e) => setSearchRepo(e.target.value)}
        className="bg-transparent border rounded-lg py-1 px-3 mr-4 min-w-0 w-full"
      />
      <select
        name=""
        id=""
        placeholder="Language"
        className="bg-gray-500 py-1 px-3 text-center rounded-xl"
        onChange={(e) => {
          if (e.target.value.toLowerCase() !== filter) {
            setFilter(e.target.value.toLowerCase());
          }
        }}
      >
        <option value="All">All</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
      </select>
    </div>
  );
};

export default SearchFilterRepoBox;
