import React from "react";
import { useGlobalContext } from "../Context";

const Pagination = () => {
  const { page, nbPages, prevPage, nextPage } = useGlobalContext();
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => prevPage()}
        className="p-2 font-semibold text-black bg-slate-400"
      >
        Prev Page
      </button>
      <p>
        {page + 1} to {nbPages}
      </p>
      <button
        className="p-2 font-semibold text-black bg-slate-400"
        onClick={() => nextPage()}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
