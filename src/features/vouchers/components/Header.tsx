import { LuMonitor, LuSearch, LuX } from "react-icons/lu";
import Button from "../../../components/ui/Button";
import useSearch from "../../../hooks/useSearch";

const Header = () => {
  const { searchInputRef, querySearch, handleSearchInput, handleClearSearch } =
    useSearch();

  return (
    <header className="mt-5">
      <div className="flex justify-start gap-3 md:justify-between items-center">
        <div className="relative">
          <input
            type="text"
            ref={searchInputRef}
            onChange={handleSearchInput}
            className="max-[320px]:ps-5 ps-10 placeholder:text-sm rounded-lg border py-2 focus:outline-2 focus:outline-blue-500"
            placeholder="Search Vouchers"
          />
          <LuSearch className="max-[320px]:hidden size-3.5 text-gray-500 absolute inset-0 translate-x-4 translate-y-3.5 " />
          {querySearch && (
            <button
              onClick={handleClearSearch}
              className="-translate-x-8 size-5 rounded-full bg-gray-200 inline-flex justify-center items-center"
            >
              <LuX className="size-3" />
            </button>
          )}
        </div>
        <Button className="sm:inline-flex  hidden text-sm py-2 px-4  gap-2 items-center">
          <LuMonitor className="size-4" /> Create Sale
        </Button>
        <Button className=" sm:hidden text-sm size-10 rounded-full inline-flex justify-center items-center">
          <LuMonitor />
        </Button>
      </div>
    </header>
  );
};

export default Header;
