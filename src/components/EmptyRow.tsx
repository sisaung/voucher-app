import { Link } from "react-router-dom";

const EmptyRow = () => {
  return (
    <tr>
      <td
        colSpan={6}
        className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500"
      >
        There is no product...
        <Link
          to="/dashboard/products/create"
          className="text-blue-500 underline"
        >
          Create News
        </Link>
      </td>
    </tr>
  );
};

export default EmptyRow;
