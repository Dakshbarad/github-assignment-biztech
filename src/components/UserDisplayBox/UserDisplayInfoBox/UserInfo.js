import React from "react";
import { GlobalContext } from "../../../context/githubContext";

const UserInfo = () => {
  const { githubUser } = GlobalContext();

  return (
    <div className="p-3">
      <h2 className="font-bold text-3xl mt-0 text-white">{githubUser?.name}</h2>
      <h3 className="font-light text-2xl mt-0 mb-2 text-gray-400">{githubUser?.login}</h3>
      <button className="bg-blue-600 w-full rounded">Edit Profile</button>
      <p className="mt-4 text-xl font-light">{githubUser?.bio}</p>
    </div>
  );
};

export default UserInfo;
