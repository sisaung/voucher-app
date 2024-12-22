import { z } from "zod";

export type Params = {
  sort_by: string;
  sort_direction: string;
  page: string;
  limit: string;
  q?: string;
};
export type Product = {
  id?: number;
  product_name: string;
  price: number;
  created_at: string;
  updated_at: string;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  to: number;
  total: number;
};

export type Links = {
  next: string;
  prev: string;
};

export type Products = {
  data: Product[];
  meta: Meta;
  links: Links;
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
    .regex(
      /^[+]?([1-9]\d*|0)?(\.\d+)?$/,
      "Price must be a positive number greater than 0"
    )
    .min(1, "Price must be at least 1")
    .max(1000, "Price must be at most 1000"),
  correct_product: z
    .boolean()
    .refine((val) => val === true, { message: "Please check your product" }),

  redirect_to_product: z.boolean(),
});

export type ProductSchemaForm = z.infer<typeof productSchema>;
