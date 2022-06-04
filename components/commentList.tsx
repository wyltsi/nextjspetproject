import * as React from "react";

const commentContainerStyle: any = {
  maxHeight: "300px",
  overflowY: "scroll",
  display: "flex",
  width: "100%",
};

const commentStyle: any = {
  fontSize: "14px",
  margin: "10px 0",
  wordWrap: 'break-word'
};

function CommentList({ commentReader }: any) {
  const result = commentReader();

  return (
    <div className="container" style={commentContainerStyle}>
      {result?.posts?.map((post: any, i: number) => {
        if (!post.data?.children || post.data?.dist === 1) {
          return null;
        }
        return (
          <div key={i} className="container">
            {post.data.children.map((child: any, childIndex: number) => {
              return (
                <div style={commentStyle} key={childIndex}>
                  {child.data.body}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
