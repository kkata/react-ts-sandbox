import { useFetch } from "../hooks/useFetch";
export const CustomHookExample1 = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>{data && data.map((post) => <h3 key={post.id}>{post.title}</h3>)}</div>
  );
};
