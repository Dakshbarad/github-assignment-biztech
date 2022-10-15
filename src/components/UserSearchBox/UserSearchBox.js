import React, { useState } from "react";
import { GlobalContext } from "../../context/githubContext";

const UserSearchBox = () => {
  const { searchGithubUser } = GlobalContext();
  const [userToSearch, setUserToSearch] = useState("");

  return (
    <div className="bg-lightblue flex justify-center items-center row-span-1">
      <input
        type="text"
        onChange={(e) => setUserToSearch(e.target.value)}
        placeholder="Look for github user..."
        className="shadow border rounded py-1 px-3 mr-3 focus:outline-none text-gray-700"
      />
      <button
        onClick={() => {
          if (userToSearch) {
            searchGithubUser(userToSearch);
          }
        }}
        className="bg-blue-600 rounded  text-white shadow py-1 px-4 "
      >
        Search
      </button>
    </div>
  );
};

export default UserSearchBox;
