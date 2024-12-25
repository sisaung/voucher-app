import { LuCirclePlus } from "react-icons/lu";
import Button from "../../../components/ui/Button";
import useSaleProductSelect from "../hooks/useSaleProductSelect";

const SaleProductSelectForm = () => {
  const {
    selectedSaleProduct,
    chooseProductRef,
    quantity,
    handleChooseSaleProduct,
    handleChangeQuantity,
    handleAddProducts,
  } = useSaleProductSelect();

  return (
    <div className="p-5 mb-5">
      <div className="flex flex-wrap gap-5">
        <div className="flex items-start gap-2">
          <Button
            onClick={handleChooseSaleProduct}
            className=" text-nowrap inline-flex items-center gap-1 py-2.5 text-sm"
          >
            Choose Product
          </Button>

          {selectedSaleProduct && (
            <input
              type="text"
              readOnly
              ref={chooseProductRef}
              className="text-sm ps-5 px-6 text-wrap text-gray-600 text-center border focus:outline-2 py-2.5 focus:outline-blue-500 "
            />
          )}
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            className="placeholder:text-sm border focus:outline-2 py-2.5 focus:outline-blue-500 ps-5"
            placeholder="Enter quantity"
          />
        </div>

        <div>
          <Button
            variant="outline"
            disabled={!selectedSaleProduct || !quantity}
            onClick={handleAddProducts}
            className="selected-none text-nowrap disabled:bg-gray-200 disabled:opacity-70 disabled:pointer-events-none inline-flex items-center px-5 gap-2 py-2.5 text-sm "
          >
            <LuCirclePlus className="size-5 " />
            Add Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SaleProductSelectForm;
