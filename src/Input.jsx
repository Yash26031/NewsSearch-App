import React from "react";
import { useGlobalContext } from "./Context";

const Input = ({ placeholder }) => {
  const { query, searchPost } = useGlobalContext();

  return (
    <input
      value={query}
      onChange={(event) => searchPost(event.target.value)}
      placeholder={placeholder}
      className="w-56 px-2 py-1 bg-gray-100 border-2 border-gray-700 rounded-md"
    />
  );
};

export default Input;
