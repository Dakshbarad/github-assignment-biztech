import React from "react";
import { GlobalContext } from "../../../context/githubContext";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";

const UserDisplayInfoBox = () => {
  const { githubUser } = GlobalContext();

  return (
    <div className="col-span-1 mt-10">
      <UserImage url={githubUser?.avatar_url} />
      <UserInfo />
    </div>
  );
};

export default UserDisplayInfoBox;
