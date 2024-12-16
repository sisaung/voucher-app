import { LuArrowLeft, LuMenu } from "react-icons/lu";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { useShallow } from "zustand/shallow";
import { AnimatePresence, motion } from "motion/react";
import Logout from "../../../components/Logout";

const Header = () => {
  const { isOpen, setIsOpen } = useToggleSideNav(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setIsOpen: state.setIsOpen,
    }))
  );

  const handleToggleSideNav = () => {
    setIsOpen();
  };

  return (
    <div className="px-5 py-5 bg-white border-b shadow-sm">
      <div className="flex justify-between items-center">
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
        {!isOpen && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", duration: 0.5, damping: 20 }}
            >
              <h1 className="text-xl md:text-2xl font-bold">
               
                Voucher App
              </h1>
            </motion.div>
          </AnimatePresence>
        )}
        <Logout />
      </div>
    </div>
  );
};

export default Header;
