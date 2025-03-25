import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Analytics from "./Analytics";

function Post(props) {
  const { item } = props;
  return (
    <div className="flex gap-4 justify-between items-start mb-4">
      <img src={item.avatar} className="rounded-full w-12" />
      <div className="w-full text-lg">
        <div className="font-bold">
          {item.user}{" "}
          <span className="font-normal text-slate-700">
            @{item.nickname} - {item.createdAt}
          </span>
        </div>
        <div>{item.description}</div>
        <Analytics
          analytics={{
            like_count: item.like_count,
            retweet_count: item.retweet_count,
            comment_count: item.comment_count,
          }}
        />
      </div>
      <FontAwesomeIcon icon={faEllipsis} className="w-12 text-center" />
    </div>
  );
}

export default Post;
