import styles from '../styles/PostList.module.css';

export default function PostList({ posts, onSelect }) {
  if (!posts?.length) return <p>No posts found.</p>;

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelect(post)}
          className={styles.card}
        >
          <img src={post.image} alt={post.title} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title} data-testid="post-title">{post.title}</h3>
            <p className={styles.meta}>
              By <span>{post.author}</span> · {post.date}
            </p>
            <p className={styles.rating}>⭐ {post.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
