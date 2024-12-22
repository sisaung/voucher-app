import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  // .regex(/[A-Z]/, "Password must include at least one uppercase letter")
  // .regex(/[a-z]/, "Password must include at least one lowercase letter")
  // .regex(/\d/, "Password must include at least one number"),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
        ,
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[a-z]/, "Password must include at least one lowercase letter")
      .regex(/\d/, "Password must include at least one number"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Password must match",
  });

export type RegisterFormSchema = z.infer<typeof registerSchema>;

type User = {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type AuthData = {
  token: string;
  user: User;
};
