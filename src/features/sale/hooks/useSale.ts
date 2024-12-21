import { useForm } from "react-hook-form";
import { SaleInfoFormSchema, saleInfoSchema } from "../../../types/saleInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import useStoreVoucher from "./useStoreVoucher";
import useSaleRecordStore from "../../../stores/useSaleRecordStore";
import { useShallow } from "zustand/shallow";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSale = () => {
  const { control, handleSubmit, reset } = useForm<SaleInfoFormSchema>({
    resolver: zodResolver(saleInfoSchema),
  });

  const { mutate, isPending } = useStoreVoucher("vouchers");
  const { records, taxRate, resetRecord } = useSaleRecordStore(
    useShallow((state) => ({
      records: state.records,
      taxRate: state.taxRate,
      resetRecord: state.resetRecord,
    }))
  );

  const { setSelectedSaleProduct } = useSaleProductStore(
    useShallow((state) => ({
      setSelectedSaleProduct: state.setSelectedSaleProduct,
    }))
  );

  const navigate = useNavigate();

  const subTotal = records.reduce((prev, record) => {
    const cost = record.quantity * record.product.price;
    return prev + cost;
  }, 0);

  const tax = (subTotal * taxRate) / 100;
  const total = subTotal + tax;

  const handleVoucherConfirm = (formData: SaleInfoFormSchema) => {
    const voucherData = {
      voucher_id: formData.voucher_id,
      customer_name: formData.customer_name,
      customer_email: formData.customer_email,
      sale_date: formData.sale_date,
      total: subTotal.toFixed(2),
      tax: tax.toFixed(2),
      net_total: total.toFixed(2),
    };

    const newVouchers = { ...voucherData, records };

    mutate(newVouchers, {
      onSuccess: (data) => {
        toast.success("Voucher saved successfully");
        resetRecord();
        if (formData.redirect_to_details) {
          setSelectedSaleProduct(null);
          navigate(`/dashboard/vouchers/${data.data.id}`);
        }
      },
      onError: (error) => {
        toast.error(error?.message ?? "An unknown error occurred");
      },
    });
    reset();
  };
  return {
    control,
    handleSubmit,
    isPending,
    handleVoucherConfirm,
    subTotal,
    tax,
    total,
  };
};

export default useSale;
