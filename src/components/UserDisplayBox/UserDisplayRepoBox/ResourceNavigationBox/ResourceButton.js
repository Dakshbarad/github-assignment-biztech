import React from "react";

const ResourceButton = (props) => {
  return (
    <button className="box-border text-lg pt-1 pb-3 border-b-4 border-b-transparent focus:border-b-4 focus:border-b-orange-700">
      # {props?.name}{" "}
      {props?.value!==undefined && (
        <span className="bg-gray-700 p-1 rounded-3xl">{props?.value}</span>
      )}
    </button>
  );
};

export default ResourceButton;
