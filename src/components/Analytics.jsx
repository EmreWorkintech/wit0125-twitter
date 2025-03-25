import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faSync,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Analytics(props) {
  const { analytics: a } = props;
  return (
    <div className="flex justify-between mt-2 text-slate-500">
      <div>
        <FontAwesomeIcon icon={faMessage} /> {a.comment_count}
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} /> {a.like_count}
      </div>
      <div>
        <FontAwesomeIcon icon={faSync} /> {a.retweet_count}
      </div>
      <div>
        <FontAwesomeIcon icon={faUpload} />
      </div>
      <div>
        <FontAwesomeIcon icon={faChartSimple} />
      </div>
    </div>
  );
}

export default Analytics;
