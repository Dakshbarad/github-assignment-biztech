import React from "react";

const RepoBox = ({ repo }) => {
  return (
    <article key={repo?.id} className="py-5 border-t border-t-gray-700">
      <h3 className="text-blue-500 text-xl font-bold">
        {repo?.name}{" "}
        <span className="border rounded-xl text-sm px-1 font-normal text-gray-500">
          {repo?.private ? "Private" : "Public"}
        </span>
      </h3>
      <p className="font-light text-gray-400">{repo?.description}</p>
      {repo?.language && (
        <h4 className="text-gray-300">
          <span className="bg-orange-600 mr-2 rounded-full text-orange-600">o</span>
          {repo?.language}
        </h4>
      )}
    </article>
  );
};

export default RepoBox;
