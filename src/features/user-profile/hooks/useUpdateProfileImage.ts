import { useMutation } from "@tanstack/react-query";
import { updateProfileImage } from "../../../services/userProfileApi";

const useUpdateProfileImage = (endPoint: string) => {
  return useMutation({
    mutationFn: (data: FormData) => updateProfileImage(endPoint, data),
  });
};

export default useUpdateProfileImage;
