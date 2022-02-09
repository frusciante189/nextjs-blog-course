import Authors from "../components/UI/Authors";
import PinnedPost from "../components/UI/PinnedPost";
import Post from "../components//UI/Post";
import CategoryCard from "../components/UI/CategoryCard";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Tag from "../components//UI/Tag";
import {
  getAuthors,
  getCategories,
  getPosts,
  getTechCategory,
  getWorkCategory,
} from "../lib";
import Link from "next/link";

export default function Home({
  posts,
  techCategory,
  workCategory,
  categories,
  authors,
}) {
  return (
    <>
      <section className="lg:py-4 sm:py-2 py-1">
        <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
          <PinnedPost post={posts[0].node} />
        </div>
      </section>
      <section className="lg:py-4 sm:py-2 py-1 lg:mt-6 mt-4">
        <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(1).map((post, index) => {
              return <Post post={post.node} key={index} />;
            })}
          </div>
          <div className="dark:bg-bgGray bg-[#ECECEC] mt-10 text-center py-6 px-4">
            <button
              className="dark:bg-black bg-[#313638] text-white rounded-full py-4 w-full 
            sm:w-1/2 lg:w-1/3 text-sm dark:hover:bg-darkBrand hover:bg-lightBrand
            transition-colors duration-300 ease-in-out transform font-semibold"
            >
              More Posts
            </button>
          </div>
        </div>
      </section>
      <section className="lg:py-4 sm:py-2 py-1 mt-10">
        <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center space-x-1.5 border-b-2 pb-1.5 border-b-bgDarkColor dark:border-b-neutral-600 cursor-pointer group">
                <Link href="./category/tech">
                  <div>
                    <h1 className="text-xs inline-block dark:text-white text-darkText font-semibold uppercase dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out">
                      Tech
                    </h1>
                    <ChevronRightIcon className="w-5 h-5 inline-block dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out dark:text-white text-darkText" />
                  </div>
                </Link>
              </div>
              <div className="mt-6 lg:space-y-5 md:space-y-4 space-y-3">
                {techCategory.map((post, index) => {
                  return <CategoryCard post={post.node} key={index} />;
                })}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5 border-b-2 pb-1.5 border-b-bgDarkColor dark:border-b-neutral-600 cursor-pointer group">
                <Link href="./category/work">
                  <div>
                    <h1 className="text-xs dark:text-white inline-block text-darkText font-semibold uppercase dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out">
                      Work
                    </h1>
                    <ChevronRightIcon className="w-5 h-5 inline-block dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out dark:text-white text-darkText" />
                  </div>
                </Link>
              </div>
              <div className="mt-6 lg:space-y-5 md:space-y-4 space-y-3">
                {workCategory.map((post, index) => {
                  return <CategoryCard post={post.node} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-4 sm:py-2 py-1 mt-6">
        <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="space-y-8">
            <div className="flex items-center space-x-1.5 border-b-2 pb-1.5 border-b-bgDarkColor dark:border-b-neutral-600 cursor-pointer group">
              <h1 className="text-xs dark:text-white text-darkText font-semibold uppercase dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out">
                Tags
              </h1>
              <ChevronRightIcon className="w-5 h-5 dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out dark:text-white text-darkText" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {categories.map((category, index) => {
                return <Tag category={category} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pt-4 pb-14 sm:pt-2  pt-1 mt-6">
        <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="space-y-8">
            <div className="flex items-center space-x-1.5 border-b-2 pb-1.5 border-b-bgDarkColor dark:border-b-neutral-600 cursor-pointer group">
              <h1 className="text-xs dark:text-white text-darkText font-semibold uppercase dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out">
                Authors
              </h1>
              <ChevronRightIcon className="w-5 h-5 dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out dark:text-white text-darkText" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
              {authors.map((author, index) => {
                return <Authors author={author} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const techCategory = (await getTechCategory()) || [];
  const workCategory = (await getWorkCategory()) || [];
  const categories = (await getCategories()) || [];
  const authors = (await getAuthors()) || [];

  return {
    props: {
      posts,
      techCategory,
      workCategory,
      categories,
      authors,
    },
    revalidate: 30,
  };
}
