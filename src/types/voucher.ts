import { Links, Meta } from "./product";

export type VoucherRecords = {
  id: number;
  voucher_id: number;
  cost: number;
  created_at: string;
  updated_at: string;
  quantity: number;
  product: {
    id: number;
    price: string;
    product_name: string;
    created_at: string;
    updated_at: string;
    user_id: string;
  };
};
export type Voucher = {
  id: string;
  voucher_id: string;
  customer_name: string;
  customer_email: string;
  sale_date: string;
  created_at: string;
  updated_at: string;
  total: string;
  net_total: string;
  tax: string;
  records: VoucherRecords[];
};

export type VoucherDetail = {
  data: Voucher;
  message: string;
};

export type VoucherData = {
  data: Voucher[];
  meta: Meta;
  links: Links;
};
