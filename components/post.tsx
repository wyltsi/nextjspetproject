import Image from "next/image";

import * as React from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

import Comments from "./comments";

function htmlDecode(input: string) {
  var e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
}

const postCardStyle: any = {
  background: "#fff",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "1rem auto",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  padding: "10px",
  width: "620px",
  maxWidth: '95vw'
};

const imageContainerStyle: any = {
  position: "relative",
  width: "600px",
  height: "500px",
  maxWidth: '90vw'
};

const commentsStyle: any = {
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: "20px",
  display: "inline-flex",
  margin: "auto",
};

const iconStyle: any = {
  margin: "2px 5px",
};

enum PostType {
  VIDEO = 0,
  IMAGE = 1,
  EMBEDDED = 2,
  HIDDEN = 3,
}

function Post({ post }: any) {
  const [source, setSource] = React.useState<string>("/broken-1.png");
  const [commentsExpanded, setCommentsExpanded] =
    React.useState<boolean>(false);

  const [postType, setPostType] = React.useState<PostType>(PostType.IMAGE);

  const videoRef: any = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      const videoElement: any = videoRef.current;
      videoElement?.play();
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (post.gallery_data || post.is_self || post.post_hint === "link") {
      setPostType(PostType.HIDDEN);
    } else {
      if (post?.secure_media_embed?.content) {
        setPostType(PostType.EMBEDDED);
      } else {
        if (post?.media?.reddit_video?.fallback_url) {
          setSource(post.media.reddit_video.fallback_url);
          setPostType(PostType.VIDEO);
        } else {
          if (post.url && post.url.startsWith("http")) {
            //setSource("https://res.cloudinary.com/demo/image/fetch/" + post.url);
            setSource(post.url);
          } else {
            setSource("/broken-1.png");
          }
        }
      }
    }
  }, [post]);

  if (postType === PostType.HIDDEN) {
    return null;
  }

  return (
    <div style={postCardStyle} className="container" id={"post-" + post.id}>
      <h4>{post.title}</h4>
      {postType === PostType.IMAGE && (
        <div style={imageContainerStyle}>
          <Image src={source} alt="derp" layout="fill" objectFit="contain" />
        </div>
      )}
      {postType === PostType.VIDEO && (
        <video
          ref={videoRef}
          controls
          loop
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        >
          <source src={source} type="video/mp4" />
        </video>
      )}
      {postType === PostType.EMBEDDED && (
        <div
        
          style={{
            position: "relative",
            width: "100%",
            height: 300,
            left: 0,
            top: 0,
            display: 'flex'
          }}
          dangerouslySetInnerHTML={{
            __html: htmlDecode(post?.secure_media_embed?.content),
          }}
        />
      )}
      <div
        style={commentsStyle}
        role="button"
        onClick={() => setCommentsExpanded(!commentsExpanded)}
      >
        <h6>Comments</h6>
        {commentsExpanded ? (
          <BsFillCaretUpFill style={iconStyle} />
        ) : (
          <BsFillCaretDownFill style={iconStyle} />
        )}
      </div>
      <Comments
        id={post.id}
        dataParent={"post-" + post.id}
        isExpanded={commentsExpanded}
      />
    </div>
  );
}

export default Post;
