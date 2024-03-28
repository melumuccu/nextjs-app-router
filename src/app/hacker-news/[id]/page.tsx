import { getHackerNewsItem } from '../_utils/fetcher';
import styles from './page.module.css';

type HackerNewsIdPage = { params: { id: number } };

export default async function HackerNewsIdPage({ params }: HackerNewsIdPage) {
  const article = await getHackerNewsItem(params.id);

  const comments = await Promise.all(article.kids.map((commentId: number) => getHackerNewsItem(commentId)));

  return (
    <article className={styles.page}>
      <main className={styles.main}>
        <h1>{article.title}</h1>
        <p>
          by <span className={styles.author}>{article.by}</span> on{' '}
          <span className={styles.postDate}>{new Date(article.time * 1000).toLocaleString()}</span>
        </p>
        <p>
          <a href={article.url}>{article.url}</a>
        </p>
      </main>
      <div className={styles.comments}>
        <h2>Comments</h2>
        <ul>
          {comments.map(c => (
            <li key={c.id}>
              <h3>by: {c.by}</h3>
              <p>{c.text}</p>
              <p className={styles.postDate}>{new Date(c.time * 1000).toLocaleString()}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
