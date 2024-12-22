import { LuChevronRight, LuHouse } from "react-icons/lu";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  currentTitle: string;
  links?: { name: string; path: string }[];
};

const Breadcrumb = ({ currentTitle, links }: BreadcrumbProps) => {
  return (
    <section>
      <div className={`flex max-[320px]:text-xs gap-1 sm:gap-3 items-center `}>
        <Link
          to="/dashboard"
          className=" hover:text-gray-800 text-gray-400 inline-flex items-center gap-2 "
        >
          <LuHouse />
          Dashboard
        </Link>
        <LuChevronRight />

        {links?.map((link, i) => (
          <div key={i} className="flex items-center gap-3">
            <Link to={link.path} className="text-gray-400 hover:text-gray-800">
              {link.name}
            </Link>
            <LuChevronRight />
          </div>
        ))}

        <p
          className={`text-nowrap ${
            currentTitle ? "font-semibold" : "text-gray-500"
          } `}
        >
          {currentTitle}
        </p>
      </div>
    </section>
  );
};

export default Breadcrumb;
