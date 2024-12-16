import { LuArrowLeft, LuMenu } from "react-icons/lu";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { useShallow } from "zustand/shallow";
import { motion } from "motion/react";

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
  );
};

export default Header;
