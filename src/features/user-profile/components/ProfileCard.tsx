import { useShallow } from "zustand/shallow";
import useUserStore from "../../../stores/useUserStore";
import { LuUser, LuMail } from "react-icons/lu";

const ProfileCard = () => {
  const { userStore } = useUserStore(
    useShallow((state) => ({ userStore: state.userStore }))
  );

  return (
    <div className=" bg-white col-span-3 lg:col-span-6 border border-gray-200 shadow-md rounded-lg overflow-hidden">
      <div className=" h-32  bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="size-24 flex justify-center items-center rounded-full bg-white mx-5 -mt-12">
        <img
          src={
            userStore?.profile_image
              ? userStore?.profile_image
              : "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
          }
          className="size-20 rounded-full object-cover object-center "
          alt="user"
        />
      </div>

      <div className="px-5 flex items-center mt-5 gap-3">
        <LuUser className="text-gray-500" />
        <p className="font-medium text-lg"> {userStore?.name} </p>
      </div>
      <div className="px-5 flex items-center gap-3 mb-7">
        <LuMail className="text-gray-500" />
        <p className="text-gray-500">{userStore?.email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
