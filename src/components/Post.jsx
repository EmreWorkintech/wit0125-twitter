import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Analytics from "./Analytics";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { followUser } from "../store/actions/followActions";

function Post(props) {
  const { item } = props;

  const dispatch = useDispatch();

  const time = formatDistanceToNow(item.createdAt, {
    addSuffix: true,
    locale: tr,
  });

  function handleFollow() {
    const user = {
      name: item.user,
      avatar: item.avatar,
      nickname: item.nickname,
    };
    dispatch(followUser(user));
  }

  return (
    <div className="flex gap-4 justify-between items-start mb-6">
      <img src={item.avatar} className="rounded-full w-12" />
      <div className="w-full text-lg">
        <div className="font-bold cursor-pointer" onClick={handleFollow}>
          {item.user}{" "}
          <span className="font-normal text-slate-700">
            @{item.nickname} - {time}
          </span>
        </div>
        <div>{item.post}</div>
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
