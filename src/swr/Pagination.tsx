import { useState } from "react";
import useSWR from "swr";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

const useData = (url: string) => {
  const { data, error } = useSWR<PostType[]>(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

type PageProps = {
  pageIndex: number;
};
const Page = ({ pageIndex }: PageProps) => {
  const { data, isLoading, isError } = useData(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=10`
  );

  if (isError) return <div>failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {item.id}: {item.title}
          </div>
        ))}
    </>
  );
};

export const PaginationPage = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Page pageIndex={pageIndex} />

      <button
        onClick={() => setPageIndex(pageIndex - 1)}
        disabled={pageIndex === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPageIndex(pageIndex + 1)}
        disabled={pageIndex === 5}
      >
        Next
      </button>
    </div>
  );
};
