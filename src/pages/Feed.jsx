import LeftColumn from "../layouts/LeftColumn";
import MiddleColumn from "../layouts/MiddleColumn";

import RightColumn from "../layouts/RightColumn";

function Feed() {
  return (
    <div className="flex w-2/3 mx-auto h-screen">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
}

export default Feed;
