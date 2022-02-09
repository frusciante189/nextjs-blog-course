import Link from "next/link";
import React from "react";
import Post from "../../components/UI/Post";
import { getAuthorPosts, getAuthors } from "../../lib";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

const AuthorDetails = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
      <div className="text-center">
        <Image
          src={posts.photo.url}
          width={88}
          height={88}
          objectFit="cover"
          className="rounded-full"
        />
        <h1 className="text-center font-bold dark:text-white text-darkText text-3xl mt-1">
          {posts.name}
        </h1>
        <p className="text-center text-lg dark:text-white text-darkText mt-3 max-w-xl mx-auto">
          {posts.bio}
        </p>
        <div className="flex space-x-5 items-center justify-center mt-5 dark:text-white text-darkText">
          <Link href={posts.twitter} passHref={true}>
            <a>
              <FaTwitter size={20} />
            </a>
          </Link>
          <Link href={posts.facebook} passHref={true}>
            <a>
              <FaFacebookF size={20} />
            </a>
          </Link>
          <Link href={posts.instagram} passHref={true}>
            <a>
              <FaInstagram size={20} />
            </a>
          </Link>
          <Link href="/">
            <a className="inline-flex items-center text-sm tracking-tighter">
              <GoLocation size={20} className="mr-2" />
              {posts.location}
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {posts.post.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;

export async function getStaticProps({ params }) {
  const posts = await getAuthorPosts(params.slug);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();
  return {
    paths: authors.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
