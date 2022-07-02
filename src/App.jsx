import { memo } from "react";

import MainLayout from "./MainLayout";

function App() {
  return (
    <div className="w-screen h-full bg-blue-200">
      <MainLayout />
    </div>
  );
}

export default memo(App);
