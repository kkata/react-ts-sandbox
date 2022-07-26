import { useRef } from "react";

export const UseRefExample1 = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // null! is a workaround for typescript issue
  const paraRef = useRef<HTMLParagraphElement>(null!); // null! is a workaround for typescript issue

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control mb-2"
          ref={inputRef}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
};
