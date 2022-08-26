import useSWR from "swr";

type UserType = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    console.log("useSWR: fetching data");
    return res.json();
  });

const useUser = (id: UserType["id"]) => {
  const { data, error } = useSWR<UserType>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

type PropsIdType = {
  id: number;
};
const Navbar = () => {
  return (
    <nav>
      <Company id={USER_ID} />
    </nav>
  );
};

const Content = ({ id }: PropsIdType) => {
  const { user, isLoading } = useUser(id);
  if (isLoading) return <p>Loading...</p>;
  return user ? <h1>Welcome back, {user.name}</h1> : <p>User not found</p>;
};

const Company = ({ id }: PropsIdType) => {
  const { user, isLoading } = useUser(id);
  if (isLoading) return <p>Loading...</p>;
  return user ? <p>{user.company.name}</p> : <p>User not found</p>;
};

const USER_ID = 1;

export const TopPage1 = () => {
  return (
    <div>
      <Navbar />
      <Content id={USER_ID} />
    </div>
  );
};
