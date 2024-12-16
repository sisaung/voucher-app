import { z } from "zod";

export type Product = {
  id?: number;
  product_name: string;
  price: number;
  created_at: string;
  updated_at: string;
};

export type MetaProduct = {
  current_page: number;
  from: number;
  last_page: number;
  to: number;
  total: number;
};

export type MetaLinks = {
  next: string;
  prev: string;
};

export type Products = {
  data: Product[];
  meta: MetaProduct;
  links: MetaLinks;
};

export type ShowProduct = {
  data: Product;
};

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  price: z
    .string()
    .min(1, "Price must be at least 1")
    .max(1000, "Price must be at most 1000"),
  correct_product: z
    .boolean()
    .refine((val) => val === true, { message: "Please check your product" }),

  redirect_to_product: z.boolean(),
});

export type ProductSchemaForm = z.infer<typeof productSchema>;
