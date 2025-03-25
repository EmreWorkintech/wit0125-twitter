import React from "react";
import PostList from "../components/PostList";

function MiddleColumn() {
  return (
    <div className="w-2/3 border-r-2 border-l-2 border-slate-200 mt-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Home</h1>
      <PostList />
    </div>
  );
}

export default MiddleColumn;
