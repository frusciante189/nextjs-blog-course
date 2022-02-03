import Head from "next/head";
import React from "react";

const PageHead = () => {
  return (
    <Head>
      <title>Frus Blog</title>
      <meta name="description" content="Frus Nextjs Blog Course" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default PageHead;
