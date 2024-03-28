import styles from './_styles/page.module.css';

export default function HackerNewsPage() {
  return (
    <article className={styles.article}>
      <p>ここに記事が表示されます。</p>
      <p>左のメニューから記事を選択してください。</p>
    </article>
  );
}
