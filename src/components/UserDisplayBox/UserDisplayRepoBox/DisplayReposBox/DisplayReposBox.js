import React from "react";
import RepoBox from "./RepoBox";

const DisplayReposBox = ({ filteredRepos }) => {
  return (
    <div className="flex flex-col gap-3 p-3 lg:h-4/5 overflow-y-scroll">
      {filteredRepos?.map((repo) => {
        return <RepoBox repo={repo} key={repo?.id} />;
      })}
    </div>
  );
};

export default DisplayReposBox;
