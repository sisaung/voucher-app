import UserProfilePage from "../features/user-profile/pages/UserProfilePage";
import UserEditProfilePage from "../features/user-profile/pages/UserEditProfilePage";
import UserChangePasswordPage from "../features/user-profile/pages/UserChangePasswordPage";
import UserProfileLayout from "../features/user-profile/components/UserProfileLayout";

const userProfileRoute = [
  {
    path: "user-profile",
    element: <UserProfileLayout />,
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "edit-profile",
        element: <UserEditProfilePage />,
      },
      {
        path: "change-password",
        element: <UserChangePasswordPage />,
      },
    ],
  },
];
export default userProfileRoute;
