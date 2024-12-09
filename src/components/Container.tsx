import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl mx-auto container"> {children} </div>;
};

export default Container;
