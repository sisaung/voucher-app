import { LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";

const EditProfileCard = () => {
  return (
    <Link to="/dashboard/user-profile/edit-profile" className=" col-span-3">
      <div className="hover:shadow-xl duration-300 px-5 py-8 border border-gray-200 shadow-md bg-white rounded-lg overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="size-10 flex justify-center items-center bg-green-50 rounded-lg">
            <LuSettings />
          </div>
          <div>
            <p className="font-medium"> Edit Profile </p>
            <p className="text-sm text-gray-500">
              Update your name and profile photo
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EditProfileCard;
