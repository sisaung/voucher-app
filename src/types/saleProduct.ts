import { z } from "zod";

export const saleProductSchema = z.object({
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
});

export type SaleProductSchemaForm = z.infer<typeof saleProductSchema>;
