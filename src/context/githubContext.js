import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";

const rootUrl = "https://api.github.com";
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);

  // Initial api request to get the data using my github username, this is to show initial page with the data of bradtraversy github username
  useEffect(() => {
    console.log("Initial Lender")
    searchGithubUser("bradtraversy");
  }, []);

  // Function to fetch data of a github user, fetch the data of the user and if the request is successful then fetch the repo data for the user
  const searchGithubUser = async (user) => {
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { repos_url } = response.data;

      await Promise.allSettled([axios(`${repos_url}?per_page=100`)])
        .then((results) => {
          const [repos] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("The user does not exist");
    }
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// Exporting this function, so that we don't have to import useContext and the GithubContext in all files where we want to use the context. We can directly use this function in place of that.
export const GlobalContext = () => {
  return useContext(GithubContext);
};

export { GithubContext, GithubProvider };
