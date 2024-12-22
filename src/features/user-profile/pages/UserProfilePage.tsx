import Breadcrumb from "../../../components/Breadcrumb";
import ProfileSection from "../components/ProfileSection";

const UserProfilePage = () => {
  return (
    <div className="px-5 mt-7">
      <Breadcrumb currentTitle="User Profile" />
      <ProfileSection />
    </div>
  );
};

export default UserProfilePage;
