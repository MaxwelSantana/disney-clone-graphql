import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url =
    "https://api-us-east-1.graphcms.com/v2/ckumost2g3j1w01z0b1pd5xae/master";
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzM5NjI0MDQsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdW1vc3QyZzNqMXcwMXowYjFwZDV4YWUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWM0MWQ3ZWMtZTc1MS00ZTM5LTk1NjktNGEzNWEyNzQ4MmVlIiwianRpIjoiY2t1bXIxMDFnM25tYzAxeHFlOWloYXdoNiJ9.dVtW9vfokbpvUF6PxTk3wDgEr0KiWHqF4mzM4ItHEViqrNs43Xwm97mwNp7j96kZfR1e3blOumKw_gfYiavNKb4Y6ynSvsCRxFkHr5Md8JZcDHGnqLbb3-MtYF77WOHUmZIPnTC8XxDrtrcK8dvFHUop6irPhgmv2Mj3K7q0S1JK11rZOqhtZwRZOf00Yb6tmkMDYD_UqyZaE0BLTJGLaAG3rsxbSxmhO8YM1ZUaz50iE9lJnahmElPi_rqCEDlNPfUm7t1OAGHHKBQ9rhFeq9bskZIsSCIdmGoxfRVPKKE2SYtrVPRl5iu3K5nFo418sHyt3iMngyKZmNqa9HJ3cYC1PpC87y3iyA-JH7DuLVCUJBoWi1JhskLfg-bli2AwFN6vJsuTu2F9TKdJZGOUi3AGJBQdx9tENp8bKv8lU8DCJbQ2nrcXFYG_9isjKkAH8hCg46ebu_8cKe2q4ys9zBL1euvK-HifTyil_d_cA3bnRs6ZfP2we8dt5KEzTgWN2gSko86oJVJlsfgn3rBKSq6JR_rS-vlDcFzCFZU-66f_iR-Ad-kka8cJA0vvgwCbjSte8rGgd7555VUOJ4cbv9fX-Xy5ibNbT-vWcIbhVHKeQhjkW6tf1weQEKTSTs22K3PA0U6jCmNa595UMDtZTHOKrAcX6OXIHAbS0loHlfE";
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
  console.log({ data });
  return {
    props: { data },
  };
};

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
