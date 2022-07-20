import { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import MainLayout from "./MainLayout";

function App() {
  return (
    <div className="w-screen h-full bg-blue-200">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<MainLayout />} />
        <Route path="home/:id/detail" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default memo(App);
