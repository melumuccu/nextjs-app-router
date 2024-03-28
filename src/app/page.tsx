import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>All Pages</h1>
      <ul>
        <li key="hacker-news">
          <a href="/hacker-news">Hacker News</a>
        </li>
      </ul>
    </main>
  );
}
