import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import '../public/css/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}

export default MyApp;
