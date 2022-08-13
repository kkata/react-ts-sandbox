import { useState } from "react";
import { CustomHookExample1 } from "./components/CustomHookExample1";
import { CustomHookExample2 } from "./components/CustomHookExample2";
import { UseCallbackExample } from "./components/UseCallbackExample";
import { UseMemoExample } from "./components/UseMemoExample";
import { UseRefExample1 } from "./components/UseRefExample1";
import { UseRefExample2 } from "./components/UseRefExample2";
import { UseRefExample3 } from "./components/UseRefExample3";
import { Level00 } from "./components/levels/Level00";
import { Level01 } from "./components/levels/Level01";
import { Level02 } from "./components/levels/Level02";
import { Level03 } from "./components/levels/Level03";
import { Level04 } from "./components/levels/Level04";
import { Level05 } from "./components/levels/Level05";
import { Level06 } from "./components/levels/Level06";
import { Level07 } from "./components/levels/Level07";
import { Level08 } from "./components/levels/Level08";
import { Level09 } from "./components/levels/Level09";
import { Level10 } from "./components/levels/Level10";
import { Level11 } from "./components/levels/Level11";
import { Level12 } from "./components/levels/Level12";

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const levels = [
    Level00,
    Level01,
    Level02,
    Level03,
    Level04,
    Level05,
    Level06,
    Level07,
    Level08,
    Level09,
    Level10,
    Level11,
    Level12,
  ];

  const SelectedComponent = levels[selectedIndex];

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
      {/* <CustomHookExample2 /> */}
      <div>
        <label>Level: </label>
        <select
          value={selectedIndex || ""}
          onChange={handleChange}
          className="mb-5"
        >
          {levels.map((_, i) => (
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
