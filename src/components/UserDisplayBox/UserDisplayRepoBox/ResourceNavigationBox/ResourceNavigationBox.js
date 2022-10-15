import React from "react";
import { GlobalContext } from "../../../../context/githubContext";
import ResourceButton from "./ResourceButton";

const ResourceNavigationBox = () => {
  const { githubUser } = GlobalContext();

  return (
    <div className="flex flex-wrap gap-5">
      <ResourceButton name="Overview" />
      <ResourceButton name="Repositories" value={githubUser?.public_repos} />
      <ResourceButton name="Projects" value={githubUser?.public_gists} />
      <ResourceButton name="Packages" />
      <ResourceButton name="Stars" />
    </div>
  );
};

export default ResourceNavigationBox;
