import { ArticleEntry } from "@components";
import * as Styles from "./styles";

const articles = [
  {
    title: "Applying SOLID principles in React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "",
    slug: "applying-solid-principles-in-react",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    publishedAt: "2023-04-21T17:03:38.891Z",
    id: 1,
  },
  {
    title: "How to learn English to C2 level",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "",
    slug: "applying-solid-principles-in-react",
    category: "English",
    image:
      "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    publishedAt: "2023-03-21T17:03:38.891Z",
    id: 2,
  },
  {
    title:
      "What I do on the job, and how to learn web development from scratch for free",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "",
    slug: "applying-solid-principles-in-react",
    category: "Career development",
    image:
      "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    publishedAt: "2023-02-21T17:03:38.891Z",
    id: 3,
  },
  {
    title: "How to grow as a Junior Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "",
    slug: "applying-solid-principles-in-react",
    category: "Career development",
    image:
      "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    publishedAt: "2023-01-21T17:03:38.891Z",
    id: 4,
  },
];

export const ArticleList = () => {
  return (
    <Styles.MainContainer>
      {articles.map(({ description, title, id, image }) => (
        <ArticleEntry
          id={id}
          key={id}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </Styles.MainContainer>
  );
};
