import React from "react";
import { MoviesList } from "../assets/components/MoviesList";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { postId } = router.query;

  return <MoviesList postId={postId} />;
};
