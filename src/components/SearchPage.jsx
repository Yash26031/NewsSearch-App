import React, { memo } from "react";
import { useGlobalContext } from "../Context";

const SearchPage = () => {
  const { hits, nbPages, isLoading, removePost, query } = useGlobalContext();
  console.log("hits is", hits);

  if (isLoading) {
    return <h1 className="text-3xl font-bold text-black">... LOADING</h1>;
  }

  if (query === "") {
    return (
      <h1 className="text-3xl font-bold text-black">
        Search The Article That U Wanna Read{" "}
      </h1>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold ">Some Latest News Article</h1>
      {hits.map((data) => {
        const { title, author, num_comments, url, objectID } = data;
        return (
          <div key={objectID} className="p-5 my-5 bg-white">
            <h1 className="text-lg font-bold ">{title}</h1>
            <div className="my-2">
              <p className="text-xs font-semibold text-gray-400">
                By
                <span className="ml-2 text-sm font-bold text-gray-600">
                  {author}
                </span>
                <span className="mx-2">&</span>
                <span className="text-sm font-bold text-gray-600">
                  {num_comments}
                </span>
                <span className="ml-2 text-xs font-semibold text-gray-400">
                  comments
                </span>
              </p>
            </div>
            <div className="flex justify-between py-2">
              <a
                className="text-sm font-semibold text-blue-600"
                href={url}
                target="_blank"
              >
                Read More
              </a>
              <button
                href="#"
                onClick={() => removePost(objectID)}
                className="text-sm font-semibold text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(SearchPage);
