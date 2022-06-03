import * as React from "react";
import Post from "./post";

function PostList({ postReader }: any) {
  const result = postReader();

  return (
    <div className="col">
      {result?.posts?.data?.children.map((post: any, i: number) => (
        <div key={i} className="container">
          <Post post={post.data} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
