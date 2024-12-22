import { LuCamera } from "react-icons/lu";

import TextInput from "../../../components/TextInput";
import Button from "../../../components/ui/Button";

import LoadingSpinner from "../../../components/LoadingSpinner";

import useUserProfile from "../hooks/useUserProfile";

const UserEditProfileForm = () => {
  const {
    control,
    handleSubmit,
    userStore,
    handleEditProfile,
    handleClickProfilePhoto,
    photoRef,
    handleFileChange,
    changeImageUrl,
    isPending,
    isPendingImage,
  } = useUserProfile();

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-center mb-5">Edit Profile</h1>
      <div className="max-w-xl mx-auto w-full shadow-sm px-8 bg-white py-6 rounded-md">
        <form onSubmit={handleSubmit(handleEditProfile)} className="space-y-5">
          <div className=" size-24 relative mx-auto">
            {changeImageUrl ? (
              <img
                src={changeImageUrl}
                alt="profile"
                className="size-24 rounded-full object-cover object-center"
              />
            ) : (
              <img
                src={
                  userStore?.profile_image
                    ? userStore?.profile_image
                    : "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                }
                alt="profile"
                className="size-24 rounded-full object-cover object-center "
              />
            )}

            <div
              onClick={handleClickProfilePhoto}
              className="cursor-pointer absolute -bottom-2 right-0 z-10 size-8 bg-blue-500 flex items-center justify-center rounded-full"
            >
              <LuCamera className="text-white size-4" />
            </div>
            <input
              onChange={handleFileChange}
              ref={photoRef}
              type="file"
              className="hidden"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <h3 className="text-center text-gray-500 text-sm">
            Click the camera icon to change your photo
          </h3>
          <div>
            <TextInput
              type="text"
              name="name"
              label="Name"
              control={control}
              defaultValue={userStore?.name}
              className="md:text-sm"
            />
          </div>
          <Button
            disabled={isPending || isPendingImage}
            type="submit"
            className="text-sm mt-6 py-3 w-full disabled:opacity-75 disabled:pointer-events-none "
          >
            {isPending || isPendingImage ? (
              <>
                <div className="flex items-center gap-2 justify-center">
                  <LoadingSpinner />
                  <span> Saving </span>
                </div>
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserEditProfileForm;
