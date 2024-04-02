import { PropsWithChildren } from 'react';
import styles from './_styles/layout.module.css';

export default async function TodoListLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.page}>
      <a href="/">← Top</a>
      <header>
        <h1>Todo App</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
