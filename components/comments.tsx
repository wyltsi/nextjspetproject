import { getComments } from "pages/api/redditApi";
import * as React from "react";
import Spinner from "./spinner";
import { useAsyncResource } from "use-async-resource";
import CommentList from "./commentList";

const commentsExpanded: any = {
  height: "300px",
  transition: "0.25s ease-in",
  display: "flex",
};

const commentsClosed: any = {
  height: "0px",
  transition: "0.25s ease-out",
  display: "flex",
};

function Comments({ id, dataParent, isExpanded }: any) {
  const [commentReader, getNewComments] = useAsyncResource(getComments, id);
  const [commentsAreSet, setComments] = React.useState<boolean>();

  React.useEffect(() => {
    if (isExpanded && !commentsAreSet) {
      getNewComments(id);
      setComments(true);
    }
  }, [id, commentsAreSet, isExpanded, getNewComments]);

  return (
    <div
      style={isExpanded ? commentsExpanded : commentsClosed}
      id={"comments-" + id}
      data-parent={dataParent}
      className={isExpanded ? "isExpanded" : "isClosed"}
    >
      {isExpanded && (
        <React.Suspense fallback={<Spinner />}>
          <CommentList commentReader={commentReader} />
        </React.Suspense>
      )}
    </div>
  );
}

export default Comments;
