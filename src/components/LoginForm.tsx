import { useRef, useState } from "react";
import Button from "./ui/Button";

const LoginForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [place, setPlace] = useState<boolean>(false);

  const handleFocus = () => {
    setPlace(true);
  };

  const handleBlur = () => {
    setPlace(false);
  };

  return (
    <form className="border border-gray-200 shadow-sm rounded-lg p-5 space-y-4">
      <div className="flex flex-col gap-2 relative ">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          type="email"
          name="email"
          id="email"
          className="border py-2  focus:outline-blue-700 focus:outline-4 rounded-md px-5 ps-4 focus:border-red-"
        />
        <span
          className={`translate-x-1/2 pointer-events-none  duration-300   absolute top-0 left-0  ${
            place
              ? "-translate-y-1/2 text-sm w-10 inline-flex justify-center items-center bg-white text-blue-500 "
              : "translate-y-1/2  text-gray-800"
          }`}
        >
          Email
        </span>
      </div>
      <Button variant="primary" size="lg" onClick={() => console.log("click")}>
        Click
      </Button>
    </form>
  );
};

export default LoginForm;
