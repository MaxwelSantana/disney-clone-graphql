import React, { useState } from "react";
import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const token = process.env.GRAPH_CMS_TOKEN;
  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
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

  const variables = { pageSlug };

  const data = await graphQLCLient.request(query, variables);
  const video = data.video;
  return {
    props: { video },
  };
};

function Video({ video }) {
  const [watching, setWatching] = useState(false);

  return (
    <>
      <img
        className="video-image"
        src={video.thumbnail.url}
        alt={video.title}
      />
      <div className="info">
        <p>{video.tags.join(", ")}</p>
        <p>{video.description}</p>
        <a href="/">
          <p>go back</p>
        </a>
        <button
          className="video-overlay"
          onClick={() => {
            setWatching(!watching);
          }}
        >
          Play
        </button>
      </div>
      {watching && (
        <video>
          <source src={video.mp4.url} type="video/mp4"/>
        </video>
      )}
    </>
  );
}

export default Video;
