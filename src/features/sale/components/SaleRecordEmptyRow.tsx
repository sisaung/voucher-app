const SaleRecordEmptyRow = () => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4 text-center" colSpan={6}>
        There is no sale products...
      </td>
    </tr>
  );
};

export default SaleRecordEmptyRow;
