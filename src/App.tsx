import { useState } from "react";
import { CustomHookExample1 } from "./components/CustomHookExample1";
import { CustomHookExample2 } from "./components/CustomHookExample2";
import { UseCallbackExample } from "./components/UseCallbackExample";
import { UseMemoExample } from "./components/UseMemoExample";
import { UseRefExample1 } from "./components/UseRefExample1";
import { UseRefExample2 } from "./components/UseRefExample2";
import { UseRefExample3 } from "./components/UseRefExample3";
import { DataFetch } from "./effect-practice/DataFetch";
import { PaginationPage } from "./swr/Pagination";
import { PaginationInfiniteLoadingPage } from "./swr/PaginationInfiniteLoading";
import { TopPage0 } from "./swr/TopPage0";
import { TopPage1 } from "./swr/TopPage1";

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const Components = [TopPage0, TopPage1];

  const SelectedComponent = Components[selectedIndex];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(e.currentTarget.selectedIndex);
  };

  return (
    <div className="container mt-5">
      {/* <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <CustomHookExample1 /> */}
      <PaginationPage />
      <hr />
      <PaginationInfiniteLoadingPage />
      <hr />
      <div>
        <label>TopPage: </label>
        <select
          value={selectedIndex || ""}
          onChange={handleChange}
          className="mb-5"
        >
          {Components.map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <SelectedComponent />
      </div>
    </div>
  );
};
