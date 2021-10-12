import { gql, GraphQLClient } from "graphql-request";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const token = process.env.GRAPH_CMS_TOKEN;
  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const data = await graphQLCLient.request(query);
  const videos = data.videos;
  return {
    props: { videos },
  };
};

const Home = ({ videos }) => {
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre));
  };

  const unSeenVideos = (videos) => {
    return videos.filter((video) => !video.seen);
  };

  const mainVideo = randomVideo(videos);
  return (
    <>
      <div className="app">
        <NavBar />
        <div className="main-video">
          <img src={mainVideo.thumbnail.url} alt={mainVideo.title} />
        </div>
        <div className="video-feed">
          <Section
            genre={"Recommended for you"}
            videos={unSeenVideos(videos)}
          />
          <Section genre={"Family"} videos={filterVideos(videos, "family")} />
          <Section
            genre={"Thriller"}
            videos={filterVideos(videos, "thriller")}
          />
          <Section genre={"Classic"} videos={filterVideos(videos, "classic")} />
          <Section genre={"Pixar"} videos={filterVideos(videos, "pixar")} />
          <Section genre={"Marvel"} videos={filterVideos(videos, "marvel")} />
          <Section
            genre={"National Geographic"}
            videos={filterVideos(videos, "national-geographic")}
          />
          <Section genre={"Disney"} videos={filterVideos(videos, "disney")} />
          <Section
            genre={"star Wars"}
            videos={filterVideos(videos, "star-wars")}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
