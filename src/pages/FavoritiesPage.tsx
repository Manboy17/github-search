import React from "react";
import { useSelector } from "react-redux";

const FavoritiesPage = () => {
  const favorities = useSelector((state: any) => state.github.favorities);
  return (
    <div className="flex justify-center h-screen w-screen">
      <ul>
        {favorities?.map((favorite, index) => (
          <a href={favorite} target="_blank">
            <li className="mt-2" key={index}>
              {favorite}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FavoritiesPage;
