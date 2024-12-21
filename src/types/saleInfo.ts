import { z } from "zod";

export const saleInfoSchema = z.object({
  voucher_id: z
    .string()
    .regex(
      /^(?=.*\d{4})(?=.*[A-Z]{3})[A-Z0-9-]+$/,
      "Input must have at least 4 digits, 3 uppercase letters, and no lowercase letters"
    ),

  customer_name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),

  customer_email: z.string().email({ message: "Please enter a valid email" }),
  sale_date: z.string().date("Please enter a valid date"),

  check_all_fields: z.boolean().refine((val) => val === true, {
    message: "Please check all fields",
  }),
  redirect_to_details: z.boolean(),
});

export type SaleInfoFormSchema = z.infer<typeof saleInfoSchema>;
