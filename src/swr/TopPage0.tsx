import { useEffect, useState } from "react";

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

type PropsType = {
  user: UserType;
};

const Navbar = ({ user }: PropsType) => {
  return (
    <nav>
      <Company user={user} />
    </nav>
  );
};

const Content = ({ user }: PropsType) => {
  return <h1>Welcome back, {user.name}</h1>;
};

const Company = ({ user }: PropsType) => {
  return <p>{user.company.name}</p>;
};

const USER_ID = 1;

export const TopPage0 = () => {
  const [user, setUser] = useState<UserType>();

  // データの取得
  useEffect(() => {
    console.log("useEffect: fetching data");
    fetch(`https://jsonplaceholder.typicode.com/users/${USER_ID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // グローバルなローディング状態
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar user={user} />
      <Content user={user} />
    </div>
  );
};
