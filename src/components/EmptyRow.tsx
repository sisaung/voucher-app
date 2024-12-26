import { Link } from "react-router-dom";

type EmptyRowProps = {
  name: string;
  path: string;
};
const EmptyRow = ({ name, path }: EmptyRowProps) => {
  return (
    <tr>
      <td
        colSpan={6}
        className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
      >
        There is no {name}...
        <Link to={path} className="text-blue-500 underline">
          Create News
        </Link>
      </td>
    </tr>
  );
};

export default EmptyRow;
