import React from "react";
import SearchPage from "./components/SearchPage";
import Heading from "./Heading";
import Input from "./Input";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center p-5 space-y-4 mx-auto w-[700px]">
      <Heading>Yash Chaudhary Tech News...</Heading>
      <Input placeholder="Search Article Here" />
      <SearchPage />
    </div>
  );
};

export default MainLayout;
