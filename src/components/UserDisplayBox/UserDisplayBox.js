import React from "react";
import UserDisplayRepoBox from "./UserDisplayRepoBox/UserDisplayRepoBox";
import UserDisplayInfoBox from "./UserDisplayInfoBox/UserDisplayInfoBox";

const UserDisplayBox = () => {
  return (
    <div className="bg-darkblue grid grid-cols-4 text-white row-[span_11_/_span_11]">
      <UserDisplayInfoBox />
      <UserDisplayRepoBox />
    </div>
  );
};

export default UserDisplayBox;
