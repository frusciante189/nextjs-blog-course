import React from "react";
import Post from "../../components/UI/Post";
import { getCategories, getCategoryPosts } from "../../lib";

const CategoryDetails = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
      <div>
        <h1 className="text-center font-bold dark:text-white text-darkText text-3xl">
          {posts.name}
        </h1>
        <p className="text-center text-lg dark:text-white text-darkText mt-5 max-w-xl mx-auto">
          The origin of the word travel is most likely lost to history. The term
          travel may originate from the Old French word travail. Wikipedia
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {posts.post.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
