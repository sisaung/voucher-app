import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";


const handleApiError = (error: any) => {
    const navigate = useNavigate();
  
    const [_, __, removeToken] = useCookie("my_token");
  
    if (error.response?.status === 401) {
      removeToken();
      navigate("/");
    }
  };