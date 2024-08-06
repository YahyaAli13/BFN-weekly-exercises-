import { Post } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'First Post',
    subtitle: 'This is the subtitle of the first post',
    author: 'John Doe',
    date: '2024-07-31',
    coverImage: '/images/post1.jpg',
    content: '<p>This is the content of the first post</p>',
  },
  {
    id: '2',
    title: 'Second Post',
    subtitle: 'This is the subtitle of the second post',
    author: 'Jane Doe',
    date: '2024-07-30',
    coverImage: '/images/post2.jpg',
    content: '<p>This is the content of the second post</p>',
  },
];
