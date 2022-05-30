import Head from "next/head";
import Link from "next/link";

const siteTitle = "hxbdy";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" sizes="180x180" href="./IMG_-st443t.jpg"></link>
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/hxbdy625">
                <a>Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="https://hxbdy.tumblr.com/">
                <a>Tumblr</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
