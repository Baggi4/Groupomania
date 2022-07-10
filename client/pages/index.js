import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import io from "socket.io-client";
import PostPublic from "../components/cards/PostPublic";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, {
  reconnection: true,
});
const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);

  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    console.log("SOCKETIO ON JOIN", socket);
    socket.on("receive-message", (newMessage) => {
      alert(newMessage);
    });
  }, []);

  useEffect(() => {
    socket.on("new-post", (newPost) => {
      setNewsFeed([newPost, ...posts]);
    });
  }, []);

  const head = () => (
    <Head>
      <title>Groupomania. C'est ici que ça se passe</title>
      <meta
        name="description"
        content="A social network created by STE(Baggi4)"
      />
      <meta
        property="og:description"
        content="A social network created by STE(Baggi4)"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GOUPOMANIA" />
      <meta property="og:url" content="http://groupomania.com" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  const collection = newsFeed.length > 0 ? newsFeed : posts;

  return (
    <>
      {head()}
      <ParallaxBG url="/images/mika-AZXye0EF9hE-unsplash.jpg" />
      <div className="container">
        <div className="row pt-5">
          {collection.map((post) => (
            <div key={post._id} className="col-md-4">
                  <PostPublic key={post._id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
export default Home;
