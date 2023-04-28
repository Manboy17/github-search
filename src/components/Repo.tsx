import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../store/github/githubSlice";

interface GithubState {
  favorities: string[];
}

const Repo = ({ repo }: { repo: IRepo }) => {
  const dispatch = useDispatch();
  const favorities = useSelector(
    (state: { github: GithubState }) => state.github.favorities
  );
  const [isFav, setIsFav] = useState(favorities.includes(repo.html_url));

  const handleAddToFav = () => {
    dispatch(addToFav(repo.html_url));
    setIsFav(true);
  };

  const handleRemoveFromFav = () => {
    dispatch(removeFromFav(repo.html_url));
    setIsFav(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shodow-md hover:bg-gray-100 transition-all w-full">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="mr-2 font-bold">{repo.forks}</span>
          Watchers: <span className="mr-2 font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm text-gray-500">{repo?.description}</p>
      </a>
      {isFav ? (
        <button
          className="border py-2 px-3 mt-5 hover:border-gray-600 transition-all"
          onClick={handleRemoveFromFav}
        >
          🚫 Delete
        </button>
      ) : (
        <button
          className="border py-2 px-3 mt-5 hover:border-gray-600 transition-all"
          onClick={handleAddToFav}
        >
          ✅ Add
        </button>
      )}
    </div>
  );
};

export default Repo;
