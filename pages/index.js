import Authors from "../components/Authors";
import Categories from "../components/Categories";
import PinnedPost from "../components/PinnedPost";
import Posts from "../components/Posts";
import Tags from "../components/Tags";

export default function Home() {
  return (
    <>
      <PinnedPost />
      <Posts />
      <Categories />
      <Tags />
      <Authors />
    </>
  );
}
