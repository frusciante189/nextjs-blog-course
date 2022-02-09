import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPostDetails, getPosts } from "../../lib";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaMailBulk,
  FaLink,
} from "react-icons/fa";

const PostDetails = ({ post }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
        <>
          <div className="flex sm:flex-row flex-col relative pattern group sm:max-h-[400px] md:max-h-max overflow-hidden">
            <Link href={`./posts/${post.slug}`}>
              <div className="relative md:aspect-video aspect-square sm:w-3/4 w-full">
                <Image
                  src={post.featuredImage.url}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-all transform duration-500 ease-in-out cursor-pointer"
                  alt={post.title}
                />
              </div>
            </Link>
            <Link href={`./posts/${post.slug}`}>
              <div
                className="sm:absolute md:top-1/3 top-[30%] right-10 dark:bg-bgGray bg-white dark:text-white text-darkText lg:p-8 sm:p-6 p-4
      shadow-[8px_8px_0] dark:shadow-bgGray shadow-[#ECECEC] space-y-2
      sm:w-2/5 w-full"
              >
                <h1 className="xl:text-2xl sm:text-xl text-lg capitalize font-bold dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer">
                  {post.title}
                </h1>
                <div className="flex space-x-2 text-xs uppercase font-medium">
                  <h1 className="">{post.authors[0].name}</h1>
                  <span>{moment(post.createdAt).format("DD MMM YYYY")}</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-7 dark:text-white text-darkText divide-x divide-bgDarkColor border-t border-bgDarkColor sm:border-t-transparent">
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaFacebookF size={20} />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaInstagram />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaTwitter />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaPinterest />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaMailBulk />
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center py-2 dark:bg-bgGray bg-white">
                <FaLink size={20} />
              </a>
            </Link>
          </div>
        </>
        <div className="mt-5 max-w-3xl mx-auto pb-10">
          <div
            dangerouslySetInnerHTML={{ __html: post.content.html }}
            className="prose max-w-none prose-neutral dark:prose-invert"
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
