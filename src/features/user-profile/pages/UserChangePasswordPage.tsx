import Breadcrumb from "../../../components/Breadcrumb";
import ChangePasswordForm from "../components/ChangePasswordForm";

const UserChangePasswordPage = () => {
  return (
    <div className="px-5 mt-7">
      <Breadcrumb
        currentTitle="Change Password"
        links={[{ name: " User Profile", path: "/dashboard/user-profile" }]}
      />
      <ChangePasswordForm />
    </div>
  );
};

export default UserChangePasswordPage;
