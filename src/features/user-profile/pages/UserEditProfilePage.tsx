import Breadcrumb from "../../../components/Breadcrumb";
import UserEditProfileForm from "../components/UserEditProfileForm";

const UserEditProfilePage = () => {
  return (
    <div className="px-5 mt-6">
      <Breadcrumb
        currentTitle="Edit Profile"
        links={[{ name: "User Profile", path: "/dashboard/user-profile" }]}
      />
      <UserEditProfileForm />
      
    </div>
  );
};

export default UserEditProfilePage;
