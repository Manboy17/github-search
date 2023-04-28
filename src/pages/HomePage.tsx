import React, { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/api/githubApi";
import { useDebounce } from "../hooks/debounce";
import Repo from "../components/Repo";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isError, data: users } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  const [fetchRepos, { data: repos }] = useLazyGetUserReposQuery();

  const handleClick = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0);
  }, [debounced, users]);

  return (
    <div className="flex justify-center mx-auto h-screen w-screen pt-10">
      <div className="relative w-[600px]">
        <input
          type="text"
          placeholder="Search for github username..."
          required
          className="w-full py-2 px-3 outline-none shadow-md placeholder:text-gray-400 border mb-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="border bg-white shadow-sm absolute left-0 right-0 top-[40px] mb-2 overflow-y-scroll max-h-[250px]">
            {users?.map((user) => (
              <li
                key={user.id}
                className="py-2 px-2 text-gray-600 hover:bg-gray-100 font-normal"
                onClick={() => handleClick(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col items-start">
          {repos?.map((repo) => (
            <Repo repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
      {isError && (
        <div className="text-red-600 ml-7 items-center">
          Something went wrong...👀
        </div>
      )}
    </div>
  );
};

export default HomePage;
