import Link from 'next/link';
import { getNewsDetail, getTopNews } from './_utils/fetcher';
import styles from './page.module.css';

export default async function Top20Page() {
  const top20Ids = (await getTopNews()).slice(0, 20);
  const top20 = await Promise.all(top20Ids.map(id => getNewsDetail(id)));

  return (
    <div className={styles.page}>
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
                <Link href={`/top20/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="content">content</div>
      </main>
    </div>
  );
}
