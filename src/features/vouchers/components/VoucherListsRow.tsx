import { Voucher } from "../../../types/voucher";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import {
  LuCalendar,
  LuChevronRight,
  LuEllipsis,
  LuTrash2,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { formatDate, formatTime } from "../../../utils/formatDateTime";
import useModalStore from "../../../stores/useModalStore";
import useMutatedIdStore from "../../../stores/useMutatedIdStore";
import { useShallow } from "zustand/shallow";
import Avatar from "react-avatar";

type VoucherListsRowProps = {
  voucher: Voucher;
};

const VoucherListsRow = ({
  voucher: {
    id,
    voucher_id,
    tax,
    customer_email,
    customer_name,
    sale_date,
    created_at,
    updated_at,
    total,
  },
}: VoucherListsRowProps) => {
  const navigate = useNavigate();
  const { setOpenVoucherDeletedModal } = useModalStore(
    useShallow((state) => ({
      setOpenVoucherDeletedModal: state.setOpenVoucherDeletedModal,
    }))
  );

  const { setDeletedVoucherId } = useMutatedIdStore(
    useShallow((state) => ({ setDeletedVoucherId: state.setDeletedVoucherId }))
  );

  const handleDeleteProduct = () => {
    setOpenVoucherDeletedModal(true);
    setDeletedVoucherId(Number(id) ?? 0);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="space-y-1">
          <p>{voucher_id}</p>
          <div className="flex items-center gap-1  text-gray-400">
            <LuCalendar />
            <p className="text-xs"> {sale_date} </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <Avatar name={customer_name} round size="40" className="avatar" />
          <div>
            <p> {customer_name} </p>
            <p className="text-xs text-gray-400"> {customer_email} </p>
          </div>
        </div>
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        $ {tax}
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        $ {total}
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        <div className="flex flex-col">
          <p> {formatDate(created_at)} </p>
          <p>{formatTime(created_at)}</p>
        </div>
      </td>
      <td className="text-end px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        <div className="flex flex-col">
          <p> {formatDate(updated_at)} </p>
          <p>{formatTime(updated_at)}</p>
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
            onClick={() => navigate(`/dashboard/vouchers/${id}`)}
            className="text-blue-500 inline-flex items-center gap-2"
          >
            <LuChevronRight />
            Detail
          </MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

export default VoucherListsRow;
