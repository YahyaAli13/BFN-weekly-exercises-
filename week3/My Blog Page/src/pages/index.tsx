import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Post } from '../types';

type Props = {
  posts: Post[];
};

const HomePage = ({ posts }: Props) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
