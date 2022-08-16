import { useEffect, useState } from "react";

// ref. https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data

type ItemType = {
  anime: string;
  character: string;
  quote: string;
};

const PAGE_SIZE = 5;

// custom hook
const useData = (url: string) => {
  const [data, setData] = useState<ItemType[]>([]);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          throw Error(String(res.status));
        }
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setData(data);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
};

export const DataFetch = () => {
  // const [anime, setAnime] = useState<ItemType[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("naruto");
  const [found, setFound] = useState(true);

  const anime = useData(
    `https://animechan.vercel.app/api/quotes/anime?title=${query}&page=${page}`
  );

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }

  // 🔴 Avoid: クリーンアップなしでのフェッチング
  // フェチリクエストが順番通りに帰ってくる保証はない
  // fetch(
  //   `https://animechan.vercel.app/api/quotes/anime?title=${query}&page=${page}`
  // )
  //   .then((res) => {
  //     if (res.status === 404) {
  //       setFound(false);
  //       throw Error(String(res.status));
  //     }
  //     return res.json();
  //   })
  //   .then((data) => setAnime(data));

  // 🍏 Better: 変数を導入, cleanup functionの中の処理がunmount時に実行される
  //   let ignore = false;
  //   fetch(
  //     `https://animechan.vercel.app/api/quotes/anime?title=${query}&page=${page}`
  //   )
  //     .then((res) => {
  //       if (res.status === 404) {
  //         setFound(false);
  //         throw Error(String(res.status));
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (!ignore) {
  //         setAnime(data);
  //       }
  //     });
  //   return () => {
  //     ignore = true;
  //   };
  // }, [page, query]);

  const handlePrevPage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage(page - 1);
  };

  const handleNextPage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const animeList = (anime: ItemType[]) => (
    <ul>
      {anime.map((item, index) => (
        <li key={index}>
          {item.anime} - {item.character} - {item.quote}
        </li>
      ))}
    </ul>
  );

  const paging = (page: number, pageSize: number) => (
    <>
      <p>
        {page} / {PAGE_SIZE}
      </p>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={page === pageSize}>
          Next
        </button>
      </div>
    </>
  );

  return (
    <div>
      <h1>DataFetch</h1>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {animeList(anime)}
      {paging(page, PAGE_SIZE)}
    </div>
  );
};
