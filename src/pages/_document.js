import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" onScroll="scroll-smooth">
      <Head />
      <link rel="icon" href="/netflix.png" />
      <title>Movie App</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&family=Montserrat&family=Noto+Sans:wght@100&family=Oswald:wght@200;400&family=Pacifico&family=Poppins:wght@300;400;600&family=Public+Sans:wght@300;400;700&family=Sacramento&family=Work+Sans:wght@100;300;400;600&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
