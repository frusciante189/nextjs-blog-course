import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-poppins antialiased scroll-smooth bg-bgColor">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
