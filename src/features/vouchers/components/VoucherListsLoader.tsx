const VoucherListsLoader = () => {
  return (
    <>
      <tr className="bg-white">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex flex-col gap-1">
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <div className="size-10 rounded-full bg-gray-200  animate-pulse"></div>
            <div className="flex flex-col gap-1">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-14 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="h-4 w-18 bg-gray-200 rounded animate-pulse "></div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="h-4 w-18 bg-gray-200 rounded animate-pulse "></div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex flex-col items-end gap-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse "></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse "></div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex flex-col items-end gap-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse "></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse "></div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex  justify-center">
            <div className="h-4 w-10 bg-gray-200 rounded animate-pulse "></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default VoucherListsLoader;
