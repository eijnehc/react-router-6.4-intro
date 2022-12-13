import { useEffect, useState } from "react";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={posts} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}
