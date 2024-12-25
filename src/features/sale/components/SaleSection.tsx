import SaleRecordTable from "./SaleRecordTable";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/TextInput";
import generateVoucherID from "../../../utils/generateVoucherID";
import LoadingSpinner from "../../../components/LoadingSpinner";
import SaleProductSelectForm from "./SaleProductSelectForm";
import useSale from "../hooks/useSale";

const SaleSection = () => {
  const { control, handleSubmit, isPending, handleVoucherConfirm } = useSale();

  return (
    <section className="mt-8">
      <div>
        <form
          className="mb-5"
          id="sale-form"
          onSubmit={handleSubmit(handleVoucherConfirm)}
        >
          {/* <SaleInfo /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 bg-white p-5 shadow-sm">
            <div>
              <TextInput
                control={control}
                name="voucher_id"
                type="text"
                label="Voucher ID"
                defaultValue={generateVoucherID()}
                placeholder="INV-2014776-NGX"
                className="md:text-sm text-gray-600"
              />
            </div>
            <div>
              <TextInput
                control={control}
                name="customer_name"
                type="text"
                label="Customer Name"
                placeholder="Clerk"
                className="md:text-sm text-gray-600"
              />
            </div>
            <div>
              <TextInput
                control={control}
                name="customer_email"
                type="text"
                label="Customer Email"
                placeholder="example@gmail.com"
                className="md:text-sm text-gray-600 placeholder:text-xs"
              />
            </div>
            <div>
              <TextInput
                control={control}
                name="sale_date"
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                label="Sale Date"
                className="md:text-sm text-gray-600"
              />
            </div>
          </div>
        </form>

        <div className="bg-white">
          <SaleProductSelectForm />
          <SaleRecordTable />

          <div className="flex justify-between items-center gap-2 mt-3 mb-5">
            <div>
              <TextInput
                control={control}
                type="checkbox"
                name="check_all_fields"
                label="Make sure all fields are correct"
                className="md:text-sm text-gray-600 text-nowrap"
                check
                form="sale-form"
              />

              <TextInput
                control={control}
                type="checkbox"
                name="redirect_to_details"
                label="Redirect to voucher detail"
                className="md:text-sm text-gray-600"
                check
                form="sale-form"
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              form="sale-form"
              className="text-xs text-nowrap  hover:bg-emerald-600 inline-flex items-center gap-1 py-2 sm:text-sm text-white bg-emerald-500 disabled:opacity-75"
            >
              {isPending ? (
                <>
                  <LoadingSpinner /> <span> Saving ... </span>
                </>
              ) : (
                "Save Voucher"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
