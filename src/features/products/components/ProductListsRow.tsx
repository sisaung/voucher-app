import { Product } from "../../../types/product";

import { Menu, MenuItem } from "@szhsin/react-menu";
import { LuEllipsis, LuPencil, LuTrash2 } from "react-icons/lu";
import { formatDate, formatTime } from "../../../utils/formatDateTime";

import { useNavigate } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import useModalStore from "../../../stores/useModalStore";
import { useShallow } from "zustand/shallow";

import useMutatedIdStore from "../../../stores/useMutatedIdStore";
type ProductListsRowProps = {
  product: Product;
};
const ProductListsRow = ({ product }: ProductListsRowProps) => {
  const { setOpenProductDeletedModal } = useModalStore(
    useShallow((state) => ({
      setOpenProductDeletedModal: state.setOpenProductDeletedModal,
    }))
  );

  const { setDeletedProductId } = useMutatedIdStore(
    useShallow((state) => ({ setDeletedProductId: state.setDeletedProductId }))
  );

  const navigate = useNavigate();

  const handleDeleteProduct = () => {
    setOpenProductDeletedModal(true);
    setDeletedProductId(product.id ?? 0);
    // mutate(product.id);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {product.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {product.product_name}
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${product.price}
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        <div className="flex flex-col">
          <p> {formatDate(product.created_at)} </p>
          <p>{formatTime(product.created_at)}</p>
        </div>
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        <div className="flex flex-col">
          <p> {formatDate(product.updated_at)} </p>
          <p>{formatTime(product.updated_at)}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
        <Menu
          menuButton={
            <button>
              <LuEllipsis />
            </button>
          }
          transition
        >
          <MenuItem
            onClick={handleDeleteProduct}
            className={"text-red-500 inline-flex items-center gap-2"}
          >
            <LuTrash2 />
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => navigate(`/dashboard/products/edit/${product.id}`)}
            className="text-blue-500 inline-flex items-center gap-2"
          >
            <LuPencil />
            Edit
          </MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

export default ProductListsRow;
