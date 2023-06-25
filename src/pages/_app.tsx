import Layout from "@/components/Layout"
import '@/styles/reset.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: black;
          color: rgb(43, 255, 0);
          font-size: 26px;
        }

        a {
          color: inherit;
          text-decoration: none;
          text-align: center;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 80vw;
          width: 100%;
          margin: 70px auto;
          padding: 20px;
        }

        .contents {
          display: flex;
          flex-direction: column;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px 50px;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(222, 213, 213, 0.909);
          background-color: black;
        }

        section {
          margin: 30px auto;
        }

        .nav__list {
          display: flex;
          justify-content: space-between;
        }

        .title {
          font-size: 46px;
          font-weight: 600;
        }
      `}</style>
    </Layout>
  )
}