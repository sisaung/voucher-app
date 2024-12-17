import { removeCookie } from "react-use-cookie";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("my_token");
    removeCookie("user");
    navigate("/");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="destructive"
      className=" text-sm py-2 px-3 inline-flex items-center gap-2"
    >
      <LuLogOut />
      Logout
    </Button>
  );
};

export default Logout;
