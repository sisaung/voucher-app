import ChangePasswordCard from "./ChangePasswordCard";
import EditProfileCard from "./EditProfileCard";
import ProfileCard from "./ProfileCard";

const ProfileSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-5">
      <h1 className="text-2xl font-semibold mb-5 md:mb-3"> My Profile</h1>
      <h3 className="text-sm text-gray-500 mb-10 md:mb-5">
        Manage your account settings and preferences
      </h3>

      <div className="grid grid-cols-3 lg:grid-cols-6 w-full gap-5 max-w-3xl ">
        <ProfileCard />
        <EditProfileCard />
        <ChangePasswordCard />
      </div>
    </section>
  );
};

export default ProfileSection;
