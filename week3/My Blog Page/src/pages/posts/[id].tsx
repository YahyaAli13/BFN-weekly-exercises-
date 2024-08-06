import { GetServerSideProps } from 'next';
import { Post } from '../../types';

type Props = {
  post: Post;
};

const PostPage = ({ post }: Props) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      <img src={post.coverImage} alt={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <footer>
        <h3>Comments</h3>
        {/* Add comments section form here */}
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
