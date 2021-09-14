import { GetServerSideProps } from "next";

const BASE_URL = "http://localhost:8000/blog/api";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(`${BASE_URL}/posts/${id}`);

  console.log(res);

  if (!res.ok) {
    return {
      notFound: true
    };
  }

  const json = await res.json();
  const { title, body, created_at, status } = json;

  return { props: { title, body, created_at, status } };
}

enum BlogPostStatus {
  Published = "PUBLISHED",
  Unpublished = "UNPUBLISHED",
}

type BlogPost = {
  title: string;
  body: string;
  created_at: string;
  status: BlogPostStatus;
  id: number;
};

const BlogPost = ({ title, body, created_at }: BlogPost) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <span>Published on: {created_at}</span>
      </header>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
