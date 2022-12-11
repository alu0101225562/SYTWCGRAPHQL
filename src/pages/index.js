import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Autor from "../components/autor";
import Especie from "../components/Especie";
import Nota from "../components/Nota";

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          animales {
            id
            img
            n
            referencias
            nc
            taxonomia
          }
        }
      }
    }
    allApiArticles {
      edges {
        node {
          body
          title
          userId
          id
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log("data", data.allDataJson.edges[0].node.animales);
  console.log("data", data);
  const species = data.allDataJson.edges[0].node.animales;
  const notes = data.allApiArticles.edges;
  return (
    <Layout>
      <Autor name="Francisco Alejandro" />
      <p style={{ fontSize: "1.5rem" }}>Datos desde un archivo JSON</p>
      <div style={{ display: "grid", gridAutoFlow: "column" }}>
        {species.map((specie, id) => (
          <Especie key={specie.id} specie={specie} />
        ))}
      </div>
      <Autor name="Francisco Alejandro" />
      <p style={{ fontSize: "1.5rem" }}>
        Datos desde la API externa con graphql
      </p>
      <div style={{ display: "grid", gridAutoFlow: "column" }}>
        {notes.slice(0, 4).map((note, id) => (
          <Nota key={note.node.id} nota={note.node} />
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
