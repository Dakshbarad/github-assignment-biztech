import React from "react";

const UserImage = ({ url = "" }) => {
  return (
    <div className="p-2">
      <img src={url} alt="User" className="rounded-full" />
    </div>
  );
};

export default UserImage;
