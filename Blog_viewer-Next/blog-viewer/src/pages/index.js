// pages/index.js
import { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';
import styles from '../styles/index.module.css';

export default function Home({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Blog Posts</h1>
      {selectedPost ? (
        <PostDetail post={selectedPost} />
      ) : (
        <PostList posts={posts} onSelect={setSelectedPost} />
      )}
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
