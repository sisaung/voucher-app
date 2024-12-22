import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  userEditProfileSchema,
  UserEditProfileSchemaForm,
} from "../../../types/userEditProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import useCookie from "react-use-cookie";
import useUpdateProfileName from "./useUpdateProfileName";
import useUpdateProfileImage from "./useUpdateProfileImage";
import useUserStore from "../../../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useShallow } from "zustand/shallow";

const useUserProfile = () => {
  const photoRef = useRef<HTMLInputElement | null>(null);
  const { control, handleSubmit } = useForm<UserEditProfileSchemaForm>({
    resolver: zodResolver(userEditProfileSchema),
  });
  const [user, setUser] = useCookie("user");
  const [changeImageUrl, setChangeImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File>();

  const {
    mutate,
    data: updateProfileNameData,
    isPending,
  } = useUpdateProfileName("user-profile/change-name");

  const {
    mutate: updateProfileImage,
    data: updateProfileImageData,
    isPending: isPendingImage,
  } = useUpdateProfileImage("user-profile/change-profile-image");

  const { userStore, setUserStore } = useUserStore(
    useShallow((state) => ({
      userStore: state.userStore,
      setUserStore: state.setUserStore,
    }))
  );

  const navigate = useNavigate();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => setChangeImageUrl(fileReader.result as string);
    fileReader.readAsDataURL(file);
    setImageFile(file);
  };
  const handleClickProfilePhoto = () => {
    if (photoRef?.current) {
      photoRef.current.click();
    }
  };

  const handleEditProfile = (formData: UserEditProfileSchemaForm) => {
    if (formData.name !== userStore?.name) {
      mutate(formData, {
        onSuccess: (data) => {
          setUser(JSON.stringify(data.user));
          setUserStore(data.user);
        },
        onError: (error) => {
          toast.error(error?.message ?? "An unknown error occurred");
        },
      });
    }

    if (imageFile) {
      const formDataImage = new FormData();
      formDataImage.append("profile_image", imageFile);

      updateProfileImage(formDataImage, {
        onSuccess: (data) => {
          setUser(JSON.stringify(data.user));
          setUserStore(data.user);
        },
        onError: (error) => {
          toast.error(error?.message ?? "An unknown error occurred");
        },
      });
    }
  };

  useEffect(() => {
    if (updateProfileNameData && updateProfileImageData) {
      toast("Profiled updated successfully");
      navigate("/dashboard/user-profile");
    }
  }, [updateProfileNameData, updateProfileImageData]);

  return {
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
  };
};

export default useUserProfile;
