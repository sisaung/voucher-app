import { useMutation } from "@tanstack/react-query";
import { updateProfileName } from "../../../services/userProfileApi";

type UpdateProfileData = { name: string } | { profile_image: string };
const useUpdateProfileName = (endPoint: string) => {
  return useMutation({
    mutationFn: (data: UpdateProfileData) => updateProfileName(endPoint, data),
  });
};
export default useUpdateProfileName;
