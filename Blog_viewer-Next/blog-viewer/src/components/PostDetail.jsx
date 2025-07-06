// components/PostDetail.js
import styles from '../styles/PostDetailPage.module.css';

export default function PostDetail({ post }) {
  if (!post) return null;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.detailCard}>
      <img src={post.image} alt="Post image" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.meta}>
          By <span className={styles.author}>{post.author}</span> · {formattedDate} · {post.time}
        </p>
        <p className={styles.rating}>Rating: {post.rating}</p>
        <p className={styles.content}>{post.content}</p>
      </div>
    </div>
  );
}
