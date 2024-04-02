import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import styles from './_styles/layout.module.css';
import { getHackerNewsItem, getTopNews } from './_utils/fetcher';

export default async function HackerNewsLayout({ children }: PropsWithChildren) {
  const top20Ids = (await getTopNews()).slice(0, 20);
  const top20 = await Promise.all(top20Ids.map(id => getHackerNewsItem(id)));

  return (
    <div className={styles.page}>
      <a href="/">← Top</a>
      <header>
        <h1>Hacker News Viewer</h1>
        <h2>Top 20</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <ul className={styles.newsList}>
            {/* item.id は どうやら一意になってない様子なのでkeyには使わない */}
            {top20.map((item, i) => (
              <li key={i}>
                <Link href={`/hacker-news/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
