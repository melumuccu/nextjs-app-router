/**
 * [Hacker News](https://news.ycombinator.com/)の人気・最新の記事500件(API仕様)の記事IDを取得する
 */
export async function getTopNews() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
    next: { revalidate: 60 },
  }).then(res => res.json() as unknown as Promise<Array<number>>);
}

/**
 * Hacker Newsの記事の
 * 1. 詳細データ
 * 2. コメントデータ
 * を取得する(共通のAPIとなっている)
 */
export async function getHackerNewsItem(id: number) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json());
}
