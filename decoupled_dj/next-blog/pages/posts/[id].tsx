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
