import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// 各ページの SWR キーを取得する関数であり、
// その返り値は `fetcher` に渡されます。
// `null` が返ってきた場合は、そのページのリクエストは開始されません。
const getKey: SWRInfiniteKeyLoader = (
  pageIndex: number,
  previousPageData: PostType[]
) => {
  if (previousPageData && !previousPageData.length) return null;
  return `https://jsonplaceholder.typicode.com/posts?_page=${
    pageIndex + 1
  }&limit=10`;
};

const fetcher = (url: string): Promise<PostType[]> =>
  fetch(url).then((res) => {
    return res.json();
  });

export const PaginationInfiniteLoadingPage = () => {
  const { data, size, setSize, error } = useSWRInfinite(getKey, fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) return <div>Loading...</div>;

  // すべてのPost数を計算
  let totalPosts = 0;
  for (let i = 0; i < data.length; i++) {
    totalPosts += data[i].length;
  }

  return (
    <>
      <p>{totalPosts} Postがリストされています</p>
      {data.map((posts, index) => {
        // `posts` は、各ページの API レスポンスの配列です
        return posts.map((item) => (
          <div key={item.id}>
            {item.id}: {item.title}
          </div>
        ));
      })}
      <button onClick={() => setSize(size + 1)} disabled={totalPosts === 50}>
        さらに読み込む
      </button>
    </>
  );
};
