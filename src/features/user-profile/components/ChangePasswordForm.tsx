import { LuLockKeyhole } from "react-icons/lu";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/ui/Button";

import LoadingSpinner from "../../../components/LoadingSpinner";

import useUserUpdatePassword from "../hooks/useUserUpdatePassword";

const ChangePasswordForm = () => {
  const { control, handleSubmit, isPending, handleChangePassword } =
    useUserUpdatePassword();

  return (
    <div>
      <div className="mt-10 mb-5 flex items-center gap-2 justify-center">
        <LuLockKeyhole className="size-5" />
        <h1 className="text-2xl text-gray-800 font-semibold">
          Change Password
        </h1>
      </div>
      <div className="max-w-xl mx-auto w-full shadow-md px-8 bg-white py-6 rounded-md">
        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleChangePassword)}
        >
          <TextInput
            type="password"
            control={control}
            name="old_password"
            label="Old Password"
            className="md:text-sm text-gray-600 font-medium"
          />
          <TextInput
            type="password"
            control={control}
            name="new_password"
            label="New Password"
            className="md:text-sm text-gray-600 font-medium"
          />
          <TextInput
            type="password"
            control={control}
            name="new_password_confirmation"
            label="Confirm New Password"
            className="md:text-sm text-gray-600 font-medium"
          />
          <Button
            disabled={isPending}
            type="submit"
            className="text-sm mt-6 py-3 w-full disabled:opacity-75 disabled:pointer-events-none "
          >
            {isPending ? (
              <>
                <div className="flex items-center gap-2 justify-center">
                  <LoadingSpinner />
                  <span> Updating </span>
                </div>
              </>
            ) : (
              "Update Password"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
