import { useMutation } from "@tanstack/react-query";
import { UserChangePasswordSchemaForm } from "../../../types/userEditProfile";
import { updatePassword } from "../../../services/userProfileApi";

const useUpdatePassword = (endPoint: string) => {
  return useMutation({
    mutationFn: (data: UserChangePasswordSchemaForm) =>
      updatePassword(endPoint, data),
  });
};
export default useUpdatePassword;
