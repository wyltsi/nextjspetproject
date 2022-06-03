// This function gets called at build time
export async function getPosts() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 1100);
  });
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://www.reddit.com/r/aww/hot/.json?t=today&limit=50"
  );
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    posts,
  };
}

// This function gets called at build time
export async function getComments(postId: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 1100);
  });
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://www.reddit.com/r/aww/comments/${postId}/.json`
  );
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    posts,
  };
}
