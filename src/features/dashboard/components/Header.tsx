import { LuArrowLeft, LuMenu } from "react-icons/lu";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { useShallow } from "zustand/shallow";
import { AnimatePresence, motion } from "motion/react";
import useUserStore from "../../../stores/useUserStore";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useToggleSideNav(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setIsOpen: state.setIsOpen,
    }))
  );

  const { userStore } = useUserStore(
    useShallow((state) => ({ userStore: state.userStore }))
  );

  const handleToggleSideNav = () => {
    setIsOpen();
  };

  return (
    <div className="px-5 py-2 bg-white border-b shadow-sm">
      <div
        className={`${
          isOpen ? "grid grid-cols-2" : "grid grid-cols-2 sm:grid-cols-3"
        }`}
      >
        <div className="col-span-1 flex items-center ">
          <div>
            <motion.button
              onClick={handleToggleSideNav}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 0 : 180 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 0.5,
              }}
            >
              {isOpen ? (
                <LuArrowLeft className="size-5" />
              ) : (
                <LuMenu className="size-5" />
              )}
            </motion.button>
          </div>
        </div>

        {!isOpen && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", duration: 0.5, damping: 20 }}
              className="col-span-1 hidden sm:flex justify-center items-center"
            >
              <Link to="/dashboard" className="text-xl md:text-2xl font-bold">
                Voucher App
              </Link>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="col-span-1 ">
          <Link
            to="/dashboard/user-profile"
            className="flex  justify-end items-center gap-2  "
          >
            <img
              src={
                userStore?.profile_image
                  ? userStore.profile_image
                  : "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              }
              alt="user"
              className="size-12 rounded-full object-cover object-center"
            />
            <div className="flex flex-col ">
              <p className="text-gray-800  font-medium">{userStore?.name}</p>
              <p className="text-sm text-gray-400"> {userStore?.email} </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
