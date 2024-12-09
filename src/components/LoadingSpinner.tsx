import { tailspin } from "ldrs";

const LoadingSpinner = () => {
  tailspin.register();

  return (
    <>
      <l-tailspin size="20" stroke="4" speed="0.9" color="white"></l-tailspin>
    </>
  );
};

export default LoadingSpinner;

// Default values shown
